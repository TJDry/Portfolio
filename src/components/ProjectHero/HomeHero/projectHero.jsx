import React from 'react'
import { DownButton, GradientCircle } from '../../Button/button'
import styles from './projectHero.module.scss'
import { useRef } from 'react'
import { useEffect } from 'react';

export default function ProjectHero(text) {
  const scrollDarkness = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // scrollDarkness.style.opacity = 1 - window.scrollY / 700;
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);


  return (
    <>
    <div className={styles.container} style={{backgroundImage: `url(${process.env.PUBLIC_URL + `/images/${text.projectTitle}/${text.heroImage}`})`}}>
    <div className={`${styles.container} ${styles.overlay}`} ref={scrollDarkness}></div>
      <h1 className={styles.bobble}>{text.headline}</h1>
      <DownButton/>
    </div>
    <div className={styles.bottomLeftCirclePosition} style={{background: `${text.gradientCircleColour}`}}>
        <GradientCircle/>
      </div>
      <div className={styles.topRightCirclePosition} style={{background: `${text.gradientCircleColour}`}}>
        <GradientCircle/>
      </div>
    </>
  )
}