import React, { useEffect, useRef } from 'react';
import { DownButton, GradientCircle } from '../../Button/button'
import styles from './homehero.module.scss'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export default function HomeHero(text) {

  const scrollFade = useRef(null);
  useEffect(()=>{
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
        }
      }
    );
  }, []);

  const bottomLeftCircle = useRef(null);
  const topRightCircle = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      [bottomLeftCircle.current, topRightCircle.current],
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 0.6,
        scale: 0.9,
        duration: 3,
        ease: 'power2.out',
        stagger: 0.8, // Adjust the stagger value as needed
      }
    );
  }, []);

  return (
    <>
    <div className={styles.container} ref={scrollFade}>
      <div className={styles.headingContainer}>
        <h1>{text.headline}</h1>
        <h3>{text.subHeadline}</h3>
      </div>
      <DownButton/>
    </div>
    <div className={styles.bottomLeftCirclePosition} ref={bottomLeftCircle} style={{background: `${text.gradientCircleColour}`}}>
        <GradientCircle/>
      </div>
      <div className={styles.topRightCirclePosition} ref={topRightCircle} style={{background: `${text.gradientCircleColour}`}}>
        <GradientCircle/>
      </div>
    </>
  )
}