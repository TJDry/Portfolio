import React from 'react'
import { DownButton } from '../../Button/button'
import styles from './projectHero.module.scss'
import { useRef } from 'react'
import { Tag } from '../../Button/button'
import { projectData } from '../../../projectData'
import { useEffect } from 'react';

export default function ProjectHero(text) {

  const currentProject = projectData.find((project) => project.title === text.projectTitle);
  return (
    <>
    <div className={styles.container} style={{backgroundImage: `url(${`/images/${text.projectTitle}/${text.heroImage}`})`}}>
    <div className={`${styles.container} ${styles.overlay}`}></div>
    <h1 className={styles.headingContainer}>{text.headline}</h1>
    <div className={styles.projectBorder}>
        {currentProject &&
          <div className={styles.tagList}>
            {currentProject.tagList.map((tag,index) => (
              <Tag key={index} 
                    tagTitle={tag}
                    className={styles.tag}
              />
            ))
            }
          </div>
        }
      </div>
    </div>
    </>
  )
}