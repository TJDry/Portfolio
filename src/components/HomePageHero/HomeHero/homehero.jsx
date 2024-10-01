import React, { useEffect, useRef } from 'react';
import { DownButton, GradientCircle } from '../../Button/button';
import styles from './homehero.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThreeScene from '../../ThreeJS/threejs';

gsap.registerPlugin(ScrollTrigger);

export default function HomeHero() {
  const scrollFade = useRef(null);

  useEffect(() => {
    const element = scrollFade.current;
    gsap.fromTo(
      element.children,
      {
        y: -40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.5,
        duration: 2,
        ease: "power4.out",
        ScrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom center",
        },
      }
    );
  }, []);

  return (
    <div className={styles.wrapper}>
      <ThreeScene />
      <div className={styles.container} ref={scrollFade}>
        <div className={styles.headingContainer}>
          <h1>Hi, I’m Jay <br />UI / UX Specialist</h1>
          <h2 className={styles.subHeading}>
            I bring value to design & development projects by merging technical expertise
            with creativity & emotional considerations.
          </h2>
        </div>
      </div>
    </div>
  );
}