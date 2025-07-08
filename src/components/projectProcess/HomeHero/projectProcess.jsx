import React from 'react'
import styles from './projectProcess.module.scss'
import { projectData } from '../../../projectData'
import { Icon } from '@iconify/react';
import { Spacer } from '../../Button/button';

export default function ProjectProcess(text) {
  const currentProject = projectData.find((project) => project.title === text.projectTitle);
  console.log(text.projectData);

  const headingList = ["Challenge", "Process", "Solution",];
  const IconList = ['mynaui:mountain','mynaui:book-open','mynaui:puzzle','mynaui:sun']

  if (!currentProject || !currentProject.textList) {
    return <p>No data available for this project.</p>;
  }

  return (
<div className={styles.caseStudyContainer}>
  <div>
    {headingList.map((heading, i) => (
      <div className={styles.rightCaseStudyContainer} key={heading}>
        <div className={styles.rowBorder}>
          <div className={styles.headerBorder}>
            <h2>{heading}</h2>
          </div>
          <div className={styles.textBorder}>
            <h4>{heading}</h4>
            <p>{currentProject.textList[i]}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}
