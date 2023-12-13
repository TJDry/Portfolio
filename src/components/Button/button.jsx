import React from 'react';
import styles from './button.module.scss'
import { motion } from "framer-motion"; 



export function DownButton(){
    let clickScroll = () =>{
    window.scrollTo({
        top: window.screen.height/1.65,
        behavior: "smooth",
    });
}
        

    return(
    <div className={styles.container} onClick={clickScroll}>
        <h4>Start Here!</h4>
    </div>
    )
}
export function GradientCircle(){
    return(
    <>
        <motion.div className={styles.circle}/>
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


export const Tag = (item) => (
    <div className={styles.tagContainer}>
        <h4>{item.tagTitle}</h4>
    </div>
);


export function Spacer(item){
    return(
    <div className={styles.spaceContainer}>
        <div className={styles.spacer} style={{width: item.width}}/>
    </div>
    )
}