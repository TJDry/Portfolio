import React from 'react'
import { NavLink } from "react-router-dom";
import styles from './projectGrid.module.scss'
import { projectData } from '../../projectData';

export default function ProjectGrid() {
  return (
    <div className={styles.projectGridBorder}>
      <ul className={styles.projectGrid}>
        {projectData.map(item => (
          <li key={item.id} className={styles.projectItem}>
            <NavLink to={`${process.env.PUBLIC_URL}/projects/${item.title}`} className={styles.projectLink}>
              <div className={styles.projectCard}>
                <img
                  src= {process.env.PUBLIC_URL + `/images/${item.title}/${item.image[0]}`}
                  alt={item.title}
                  className={styles.projectImage}
                />
                <div className={styles.projectInfo}>
                  <h2>{item.title}</h2>
                  <h3>{item.role}</h3>
                  <h4>{item.description}</h4>
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

