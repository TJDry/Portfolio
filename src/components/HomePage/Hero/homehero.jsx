import React from 'react'
import { GradientCircle } from '../../Button/button'
import styles from './homehero.module.scss'
import Socials, { ScrollArrow } from '../../social/socials'

export default function HomeHero(text) {
  return (
    <div className={styles.container}>
      <h1 className={styles.bobble}>{text.headline}</h1>
      <div className={styles.scrollContainer}>
        <ScrollArrow />
      </div>
      {/* <DownButton/> */}
      <div className={styles.socialsContainer}>
        <Socials/>
      </div>
      <GradientCircle/>
    </div>
  )
}