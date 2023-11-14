import React from 'react'
import { DownButton, GradientCircle } from '../../Button/button'
import styles from './homehero.module.scss'
import Showreel from '../../Showreel/showreel'

export default function HomeHero(text) {
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.bobble}>{text.headline}<h3 className={styles.bobble}>{text.subHeadline}</h3></h1>
      {/* <DownButton/> */}
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