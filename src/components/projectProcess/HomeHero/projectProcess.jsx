import React from 'react'
import styles from './projectProcess.module.scss'
import { projectData } from '../../../projectData'
import { Icon } from '@iconify/react';
import { Spacer } from '../../Button/button';

export default function ProjectProcess(text) {
  const currentProject = projectData.find((project) => project.title === text.projectTitle);
  console.log(text.projectData);

  const headingList = ["Challenge", "Concept", "Solution", "Outcome"];
  const IconList = ['mynaui:mountain','mynaui:book-open','mynaui:puzzle','mynaui:sun']

  if (!currentProject || !currentProject.textList) {
    return <p>No data available for this project.</p>;
  }

  return (
    <div className={styles.caseStudyContainer}>
    <div className={styles.leftCaseStudyTimeline}>
      <h3>{text.leftComment}</h3>
    </div>
    <div>
      {headingList.map((heading, i) => (
    <div className={styles.rightCaseStudyContainer}>
        <div className={styles.rowBorder} key={i}>
          <div className={styles.iconBorder}>
            <Icon icon={IconList[i]} className={styles.icon}/>
          </div>
          <div className={styles.textBorder}>
            <h2>{heading}</h2>
            <p>{currentProject.textList[i]}</p>
          </div>
        </div>
      <Spacer/>
    </div>
      ))}
      </div>
    </div>
  );
}
