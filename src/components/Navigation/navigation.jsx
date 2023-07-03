import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import styles from './navigation.module.scss'
import { navigationData } from './navigationData';
import { motion, useScroll } from "framer-motion";
import { Logo } from '../../assets/icons';

export default function Navigation() {
  let activeClass = "active"
  const {scrollY} = useScroll();
  const [hidden, setHidden] = useState(false);

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
      <h3><NavLink to='/'><Logo/></NavLink></h3>
      <ul className={styles.navigation}>
        {navigationData.map(item => {
          return(
              <li key={item.id}>
                  <NavLink to={`/${item.path}`}
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
  )
}