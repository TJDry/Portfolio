import React from 'react'
import { DownButton, GradientCircle } from '../../Button/button'
import styles from './homehero.module.scss'

export default function HomeHero(text) {
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.bobble}>{text.headline}</h1>
      {/* <div className={styles.scrollContainer}>
        <ScrollArrow />
      </div> */}
      <DownButton/>
      {/* <div className={styles.socialsContainer}>
        <Socials/>
      </div> */}

    </div>
    <div className={styles.bottomLeftCirclePosition}>
        <GradientCircle/>
      </div>
      <div className={styles.topRightCirclePosition}>
        <GradientCircle/>
      </div>
    </>
  )
}