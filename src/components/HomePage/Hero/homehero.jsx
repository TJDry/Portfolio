import React from 'react'
import { DownButton, GradientCircle } from '../../Button/button'
import styles from './homehero.module.scss'
import { ScrollArrow } from '../../social/socials'

export default function HomeHero() {
  return (
    <div className={styles.container}>
      <h1>We help bring your <br></br>design dreams to <br></br>reality</h1>
      <div className={styles.scrollContainer}>
        <ScrollArrow />
      </div>
      <GradientCircle/>
    </div>
  )
}