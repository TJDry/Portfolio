import React from 'react'
import styles from './skillGrid.module.scss'
import { skillData } from './skillData.js';

export default function SkillGrid() {
  return (
    <ul className={styles.skillGrid}>
      {skillData.map(item => (
        <li key={item.id} className={styles.skillItem}>
            <div className={styles.skillCard}>
              <img
                src= {process.env.PUBLIC_URL + `/images/skillLogo/${item.image}`}
                alt={item.title}
                className={styles.Image}
              />
              <div className={styles.skillInfo}>
                <h2>{item.title}</h2>
                <h4>{item.description}</h4>
              </div>
            </div>
        </li>
      ))}
    </ul>
  );
}

