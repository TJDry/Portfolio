import React, { useEffect, useRef } from 'react'
import styles from './services.module.scss'
import { Icon } from '@iconify/react';
import { serviceData } from './serviceData.js';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heading } from '../textBox/text.jsx';
gsap.registerPlugin(ScrollTrigger);


export default function Services() {
  const serviceReveal = useRef(null);
  useEffect(()=>{
    const element = serviceReveal.current;
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
    <div style={{marginTop:'2em'}}>
    <h2 className={styles.header}>Specialities</h2>
    <div className={styles.servicesGridBorder}>
      <ul ref={serviceReveal} className={styles.servicesGrid}>
        {serviceData.map(item => (
          <li key={item.id} className={styles.servicesItem}>
              <div className={styles.servicesCard}>
                <div className={styles.iconSector}>
                  <Icon icon={item.logo} className={`${styles.icon}`} width="56" height="64"/>
                </div>
                <div className={styles.servicesInfo}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
