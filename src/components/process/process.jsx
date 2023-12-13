import React from 'react';
import styles from './process.module.scss'

export default function Process(text){
    return(
    <div className={`${styles.overviewContainer}`}>
        <ul>
            <li><h3>Overview</h3></li>
            <li><p>Role: {text.role}</p></li>
            <li><p>Time: {text.year}</p></li>
            <li><p>Stage: {text.status}</p></li>
            <li><p>Project Life Cycle: {text.managementStyle}</p></li>
            <li><p>Project Type: {text.projectType}</p></li>
        </ul>
    </div>
    )
}