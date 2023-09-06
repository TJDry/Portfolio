import React from 'react';
import styles from './button.module.scss'
import { motion } from "framer-motion"; 

export function DownButton(){
    return(
    <div className={styles.container}>
    {/* <svg fill="#ffffff" width="40px" height="40px" space="preserve">
        <path d="M50.5,19.881c-1.104,0-2,0.896-2,2V72.17L33.193,56.609c-0.781-0.781-1.922-0.781-2.703,0
        c-0.781,0.78-0.719,2.047,0.062,2.828l18.883,18.857c0.375,0.375,0.899,0.586,1.43,0.586s1.047-0.211,1.422-0.586l18.857-18.857
        c0.781-0.781,0.783-2.048,0.002-2.828c-0.781-0.781-2.296-0.781-3.077,0L52.5,71.933V21.881C52.5,20.776,51.604,19.881,50.5,19.881
        z"/>
    </svg> */}
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