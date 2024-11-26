import React from 'react';
import styles from './overview.module.scss'
import { projectData } from '../../projectData'
import { SoftwareIcon } from '../Button/button';

export default function Overview(text){
    return(
    // <div className={`${styles.overviewContainer}`}>
    //     <ul>
    //         <li><h3>Overview</h3></li>
    //         <li><p>Role: {text.role}</p></li>
    //         <li><p>Time: {text.year}</p></li>
    //         <li><p>Stage: {text.status}</p></li>
    //         <li><p>Project Life Cycle: {text.managementStyle}</p></li>
    //         <li><p>Project Type: {text.projectType}</p></li>
    //     </ul>
    // </div>
    <div className={styles.overviewContainer}>
        <div className={styles.leftContainer}>
            <div className={styles.overviewSlot}><h4>Date</h4><h5>{text.year}</h5></div>
            <div className={styles.overviewSlot}><h4>Role</h4><h5>{text.role}</h5></div>
            <div className={styles.overviewSlot}><h4>Status</h4><h5>{text.status}</h5></div>
            <div className={styles.overviewSlot}><h4>Structure</h4><h5>{text.managementStyle}</h5></div>
            <div className={styles.overviewSlot}><h4>Project Type</h4><h5>{text.projectType}</h5></div>
            <div className={styles.overviewSlot}>
            <h4>Software Used</h4>
            {text.softwareList && (
            <div className={styles.softwareList}>
                {text.softwareList.map((icon, index) => (
                <SoftwareIcon key={index} softwareName={icon} />
                ))}
            </div>
            )}
        </div>
        </div>
        <div className={styles.rightContainer}>
            <div className={styles.overviewText}>
                <h4>Overview</h4>
                <p>{text.overviewContent}weiofhweihfiohqwoih</p>
            </div>
        </div>
    </div>
    )
}