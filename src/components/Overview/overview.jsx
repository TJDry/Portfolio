import React from 'react';
import styles from './overview.module.scss'

export default function Overview(text){
    return(
    <div className={`${styles.overviewContainer}`}>
        <h3>{text.overview}</h3>
    </div>
    )
}