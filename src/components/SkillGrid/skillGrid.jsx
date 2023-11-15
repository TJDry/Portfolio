import React from 'react'
import styles from './skillGrid.module.scss'
import { Icon } from '@iconify/react';
import { skillData } from './skillData.js';

export default function SkillGrid() {
  return (
    <div className={styles.skillGridBorder}>
      <ul className={styles.skillGrid}>
        {skillData.map(item => (
          <li key={item.id} className={styles.skillItem}>
              <div className={styles.skillCard}>
                <Icon icon={item.logo} className={`${styles.icon}`}/>
                <div className={styles.skillInfo}>
                  <h2>{item.title}</h2>
                  <h4>{item.description}</h4>
                </div>
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

