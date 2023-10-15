import React, {useState,useRef,useEffect} from 'react'
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
  const openRef = useRef();


  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 650);
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
    <motion.div className={styles.container}
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.2, 0.3, 0.4, 1], duration: 0.3 }}
    >
      <h3><Logo/></h3>
      {isMobile ? (
      <div className={styles.hamburgerMenu}>
          <div className={styles.navigationContainer} onClick={() => setIsOpen(!isOpen)}>
              <div className={isOpen ? `${styles.navBtn} ${styles.active}` : `${styles.navBtn}`}></div>
          </div>
              <div 
                  className={styles.navMenu} 
                  ref={openRef}
                  style={isOpen 
                  ? {
                      width: "100vw",
                  }:{
                      width: "0px",
                  }}
                  >
              <ul>
                  {navigationData.map((item, index) => {
                      return(
                          <>
                          <li 
                          key={index} 
                          className={`${styles.navText} ${styles[item.cName]}`}
                          style={isOpen 
                          ? {
                              width: "40%",
                              opacity: "1",
                          }:{
                              width: "0",
                              opacity: "0"
                          }}
                          >
                              <NavLink to={`/${item.path}`}>
                                  <span>{item.title}</span>
                              </NavLink>
                          </li>
                          </>
                      );
                  })}
              </ul>
          </div>
      </div>
      ):(
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
      )}
    </motion.div>
  )
}


export function NavigationMobile(props){
  const [isOpen,setIsOpen] = useState(false);

  const openRef = useRef();
  return(
      <>
          <div className={styles.navigationContainer} onClick={() => setIsOpen(!isOpen)}>
              <div className={isOpen ? `${styles.navBtn} ${styles.active}` : `${styles.navBtn}`}  style={{color: `${props.colorFlat}`}}></div>
          </div>
              <div 
                  className={styles.navMenu} 
                  ref={openRef}
                  style={isOpen 
                  ? {
                      width: "100vw",
                  }:{
                      width: "0px",
                  }}
                  >
              <ul>
                  {navigationData.map((item, index) => {
                      return(
                          <>
                          <li 
                          key={index} 
                          className={`${styles.navText} ${styles[item.cName]}`}
                          style={isOpen 
                          ? {
                              width: "40%",
                              opacity: "1",
                          }:{
                              width: "0",
                              opacity: "0"
                          }}
                          >
                              <NavLink to={`/${item.path}`}>
                                  <span>{item.title}</span>
                              </NavLink>
                          </li>
                          </>
                      );
                  })}
              </ul>
          </div>
      </>
  );
}
