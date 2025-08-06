import React, { useEffect, useRef } from 'react';
import { DownButton, GradientCircle, ScrollArrow } from '../../Button/button';
import styles from './homehero.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomeHero({ headline, subHeadline }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    gsap.to(container, {
      backgroundPosition: '50% 100%', // moves background vertically
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.headingContainer}>
        <h1>{headline}</h1>
        <h3>{subHeadline}</h3>
      </div>
      <ScrollArrow />
    </div>
  );
}