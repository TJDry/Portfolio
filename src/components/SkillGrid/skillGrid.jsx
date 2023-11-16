import React, { useEffect, useRef } from 'react'
import styles from './skillGrid.module.scss'
import { Icon } from '@iconify/react';
import { skillData } from './skillData.js';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function SkillGrid() {
  const skillReveal = useRef(null);
  useEffect(()=>{
    const element = skillReveal.current;
    gsap.fromTo(
      element.children,
      {
        y: -40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.4,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom center",
        }
      }
    );
  }, []);
  return (
    <div className={styles.skillGridBorder}>
      <ul ref={skillReveal} className={styles.skillGrid}>
        {skillData.map(item => (
          <li key={item.id} className={styles.skillItem}>
              <div className={styles.skillCard}>
                <Icon icon={item.logo} className={`${styles.icon}`}/>
                <div className={styles.skillInfo}>
                  <h2>{item.title}</h2>
                  <h4>{item.description}</h4>
                </div>
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

