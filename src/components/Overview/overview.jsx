import React from 'react';
import styles from './overview.module.scss'
import { projectData } from '../../projectData'
import ConditionalButton, { SoftwareIcon, TooltipCustom } from '../Button/button';
import { Tooltip } from 'react-tooltip';

export default function Overview(text){
    return(

    <div className={styles.overviewContainer}>
        <div className={styles.leftContainer}>
            <div className={styles.overviewSlot}><h4>Date</h4><h5>{text.year}</h5></div>
            <div className={styles.overviewSlot}><h4>Role</h4><h5>{text.role}</h5></div>
            <div className={styles.overviewSlot}><h4>Status</h4><h5>{text.status}</h5></div>
            <div className={styles.overviewSlot}><h4>Structure</h4><h5>{text.managementStyle}</h5></div>
            <div className={styles.overviewSlot}><h4>Project Type</h4><h5>{text.projectType}</h5></div>
            <div className={styles.overviewSlot}>
            <h4>Software Used</h4>
            {Array.isArray(text.softwareList) && Array.isArray(text.softwareTitle) && (
                <div className={styles.softwareList}>
                {text.softwareList.map((icon, index) => (
                    <TooltipCustom
                    key={index} // Key applied here for the TooltipCustom wrapper
                    text={text.softwareTitle[index]}
                    >
                    <SoftwareIcon
                        softwareTitle={text.softwareTitle[index]}
                        softwareName={icon}
                    />
                    </TooltipCustom>
                ))}
                </div>
            )}
            </div>
                </div>
        <div className={styles.rightContainer}>
            <div className={styles.overviewText}>
                <h4>Overview</h4>
                <p>{text.overviewContent}</p>
                <ConditionalButton href={text.href} className={styles.button}/>
            </div>
        </div>
    </div>
    )
}