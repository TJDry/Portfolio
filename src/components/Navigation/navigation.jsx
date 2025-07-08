import React, {useState,useEffect} from 'react'
import { NavLink } from "react-router-dom";
import styles from './navigation.module.scss'
import { navigationData } from '../Navigation/navigationData';
import { motion, useScroll } from "framer-motion";
import { Logo } from '../../assets/icons';

export default function Navigation() {
  let activeClass = "active"
  const {scrollY} = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen,setIsOpen] = useState(false);


  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 850);
    }

    handleResize(); // Set initial isMobile value on component mount.
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }
  
  React.useEffect(() => {
    scrollY.onChange(() => update());
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -5 }
  };


  return (
    <>
      <div className={styles.logoContainer}><Logo/></div>
      {isMobile ? (
           <>
           <div className={styles.navigation} onClick={() => setIsOpen(!isOpen)}>
               <div className={isOpen ? `${styles.navBtn} ${styles.active}` : `${styles.navBtn}`}></div>
           </div>
           <div className={styles.container}
                  style={isOpen 
                   ? {
                       width: "100vw",
                   }:{
                       width: "0px",
                   }}
                   >
               <ul>
                   {navigationData.map(item => {
                       return(
                           <>
                           <li 
                           key={item.id} 
                           style={isOpen 
                           ? {
                               width: "40%",
                               opacity: "1",
                           }:{
                               width: "0",
                               opacity: "0"
                           }}
                           >
                          <NavLink to={`${item.path}`} onClick={() => setIsOpen(!isOpen)}
                              className={({ isActive }) =>
                                isActive ? activeClass : undefined
                            }
                              >
                              <h5>{item.title}</h5>
                          </NavLink>
                           </li>
                           </>
                       );
                   })}
               </ul>
           </div>
        </>
      ):(
        <motion.div className={styles.container}
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.2, 0.3, 0.4, 1], duration: 0.3 }}
      >
          <ul className={styles.navigation}>
          {navigationData.map(item => {
            return(
                <li key={item.id}>
                    <NavLink to={`${item.path}`}
                    className={({ isActive }) =>
                      isActive ? activeClass : undefined
                  }
                    >
                        <span>{item.title}</span>
                    </NavLink>
                </li>
              );
            })}
        </ul>
      </motion.div>
      )}
    </>
  )
}

