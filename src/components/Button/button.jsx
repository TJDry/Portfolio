import React, { useEffect, useRef, useState } from 'react';
import styles from './button.module.scss'
import { Icon } from '@iconify/react';
import gsap from 'gsap';



export function DownButton(){
    let clickScroll = () =>{
    window.scrollTo({
        top: window.screen.height * 1.5,
        behavior: "smooth",
    });
}
    return(
    <div className={styles.container} onClick={clickScroll}>
        <h5>Start scrolling</h5>
    </div>
    )
}

export function GradientCircle(){
    return(
    <>
        <div className={styles.circle}/>
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

export const SoftwareIcon = ({ softwareTitle, softwareName }) => {
    const [hover, setHover] = useState(false);
    const iconRef = useRef(null); // Attach the ref to the root element

    useEffect(() => {
        if (iconRef.current) {
            // Animate only when the component is mounted
            gsap.fromTo(
                iconRef.current,
                { opacity: 0, scale: 0 },
                { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)" }
            );
        }
    }, []);

    return (
        <div
            ref={iconRef}
            className={styles.softwareContainer}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            role="button"
            aria-label={hover ? softwareTitle : 'Software icon'}
        >
            {hover && <h5 className={styles.softwareTitle}>{softwareTitle}</h5>}
            <Icon icon={softwareName} style={{ fontSize: '36px', color: 'white' }} />
        </div>
    );
};


const ConditionalButton = ({href}) => {
    if (!href) {
      return null; // Do not render anything if href is not provided
    }
  
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles.conditionalButton}>
        <button>Visit Site</button>
      </a>
    );
  };
  
  export default ConditionalButton;