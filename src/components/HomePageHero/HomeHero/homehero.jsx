import React, { useEffect, useRef } from 'react';
import { DownButton, GradientCircle, ScrollArrow } from '../../Button/button'
import styles from './homehero.module.scss'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export default function HomeHero(text) {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1>{text.headline}</h1>
        <h3>{text.subHeadline}</h3>
      </div>
      <ScrollArrow/>
    </div>
    </>
  )
}