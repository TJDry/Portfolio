import React from 'react';
import styles from './button.module.scss'
import { color, motion, useScroll, useTransform } from "framer-motion"; 

export function DownButton(){
    return(
    <div className={styles.container}>
        <h4>Experience More</h4>
    </div>
    )
}

export function GradientCircle(){
    const {scrollY} = useScroll();
    const x = useTransform(scrollY, (value) => (-value / 4000)-1)
    return(
    <>
        <motion.div className={styles.circle}
            style= {{
                scale: x,
            }}
        />
    </>
    )
}

export function ProjectButton(){
    return(
    <div className={styles.projectButtonContainer}>
        <h4>Read about it</h4>
    </div>
    )
}