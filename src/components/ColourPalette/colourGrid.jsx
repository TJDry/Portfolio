import React from 'react'
import styles from './colourGrid.module.scss'

export default function ColourGrid({ item }) {
  const colourPalette=["Primary","Secondary","Tertiary","Other","Alternative","Black"]
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Colour Palette</h2>
        <p>
          Explore this palette of colors, each representing a unique shade with space for a description or additional content.
        </p>
      </div>
      <div className={styles.gridContainer}>
        <ul className={styles.colourGrid}>
          {Object.entries(item).map(([key, colour]) => (
            <li key={key} className={styles.paletteCard}>
              <div
                className={styles.colorPreview}
                style={{ background: colour }}
                aria-label={key}
              />
              <div className={styles.cardContent}>
                <h3>{colourPalette[key]}</h3>
                <p>{colour}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
