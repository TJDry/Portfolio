import React, { useEffect, useRef } from 'react';
import { DownButton,HexagonCluster } from '../../Button/button'
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

  return (
    <>
    <div className={styles.container} ref={scrollFade}>
      <div className={styles.headingContainer}>
        <h1>Hi, I’m Jay <br></br>a creative designer</h1>
        <h2>I bring value to web design & development projects by merging technical expertise with creativity and aesthetics.</h2>
      </div>
    </div>
    <div className={styles.bottomLeftCirclePosition} ref={bottomLeftCircle} style={{background: `${text.gradientCircleColour}`}}>
        <HexagonCluster/>
      </div>
      <div className={styles.topRightCirclePosition} ref={topRightCircle} style={{background: `${text.gradientCircleColour}`}}>
        <HexagonCluster/>
      </div>
    </>
  )
}