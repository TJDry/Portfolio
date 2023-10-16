import React from 'react'
import styles from './colourGrid.module.scss'
export default function ColourGrid(item) {
  return (
      <div className={styles.container}>
        <ul className={styles.colourGrid}>
                <li className={styles.paletteCard} style={{background: `${item.colour1}`}}></li>
                <li className={styles.paletteCard} style={{background: `${item.colour2}`}}></li>
                <li className={styles.paletteCard} style={{background: `${item.colour3}`}}></li>
                <li className={styles.paletteCard} style={{background: `${item.colour4}`}}></li>
                <li className={styles.paletteCard} style={{background: `${item.colour5}`}}></li>
        </ul>
      </div>
    );
}

