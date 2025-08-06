import React, { useEffect, useRef } from 'react'
import styles from './approach.module.scss'
import { Icon } from '@iconify/react';
import { approachData } from './approachData.js';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heading } from '../textBox/text.jsx';
gsap.registerPlugin(ScrollTrigger);


export default function Approach() {
  const approachReveal = useRef(null);
  useEffect(()=>{
    const element = approachReveal.current;
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
          start: "-200%",
          end: "bottom center",
        }
      }
    );
  }, []);
  return (
    <>
    <h2 className={styles.header}>From modern minimalism to timeless classics, Relied upon by a fresh generation of companies.</h2>
    <div className={styles.approachGridBorder}>
      <ul ref={approachReveal} className={styles.approachGrid}>
        {approachData.map(item => (
          <li key={item.id} className={styles.approachItem}>
              <div className={styles.approachCard}>
                <div className={styles.iconSector}>
                  <Icon icon={item.logo} className={`${styles.icon}`} width="56" height="64"/>
                </div>
                <div className={styles.approachInfo}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
