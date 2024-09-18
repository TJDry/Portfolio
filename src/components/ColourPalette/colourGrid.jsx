import React from 'react'
import styles from './colourGrid.module.scss'
export default function ColourGrid(item) {
  return (
      <div className={styles.container}>
        <div className={styles.borderContainer}>
        <div className={styles.leftContainer}>
        <ul className={styles.colourGrid}>
                <li className={styles.paletteCard} style={{background: `${item.colour1}`}}></li>
                <li className={styles.paletteCard} style={{background: `${item.colour2}`}}></li>
                <li className={styles.paletteCard} style={{background: `${item.colour3}`}}></li>
                <li className={styles.paletteCard} style={{background: `${item.colour4}`}}></li>
                <li className={styles.paletteCard} style={{background: `${item.colour5}`}}></li>
        </ul>
        <div>
          <h3>This is some text that should help create some more text Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, minima aperiam libero omnis perspiciatis explicabo esse, tempore excepturi cumque nihil est sapiente at quis. Ipsum, veniam odio! Voluptate, architecto qui.</h3>
        </div>
        </div>
        <div className={styles.rightContainer}></div>
      </div>
      </div>
    );
}

