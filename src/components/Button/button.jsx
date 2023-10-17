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
    // const {scrollY} = useScroll();
    // const x = useTransform(scrollY, (value) => (-value / 4000)-1)
    return(
    <>
        <motion.div className={styles.circle}
            // style= {{
            //     scale: x,
            // }}
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