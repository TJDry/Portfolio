import React, { useEffect, useRef, useState } from 'react';
import styles from './button.module.scss'
import { Icon } from '@iconify/react';
import gsap from 'gsap';


// DOWN BUTTON ------------------------------------------------------------------------------------------->
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
// GRADIENT CIRCLE ------------------------------------------------------------------------------------------->
export function GradientCircle(){
    return(
    <>
        <div className={styles.circle}/>
    </>
    )
}

// PROJECT BUTTON ------------------------------------------------------------------------------------------->
export function ProjectButton(){
    return(
    <div className={styles.projectButtonContainer}>
        <h4>Read about it</h4>
    </div>
    )
}

// TAG ------------------------------------------------------------------------------------------->
export const Tag = (item) => (
    <div className={styles.tagContainer}>
        <h4>{item.tagTitle}</h4>
    </div>
);

// SPACER ------------------------------------------------------------------------------------------->
export function Spacer(item){
    return(
    <div className={styles.spaceContainer}>
        <div className={styles.spacer} style={{width: item.width}}/>
    </div>
    )
}
// SOFTWARE ICON ------------------------------------------------------------------------------------------->
export const SoftwareIcon = ({ softwareTitle, softwareName }) => {

    return (
        <div
            className={styles.softwareContainer}
            role="button"
            aria-label={softwareTitle}
        >
            <Icon icon={softwareName} style={{ fontSize: '36px', color: 'white' }} />
        </div>
    );
};

// CONDITIONAL BUTTON ------------------------------------------------------------------------------------------->
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
  
// CUSTOM TOOLTIP ------------------------------------------------------------------------------------------->
export const TooltipCustom =({text,children}) =>{
    const [showTooltip, setTooltip] = useState(false);
    return(
        <div className={styles.tooltipContainer}
        onMouseEnter={()=> setTooltip(true)}
        onMouseLeave={()=> setTooltip(false)}
        >
            {children}
            {showTooltip &&(
                
            <div className={`${styles.tooltip} ${showTooltip ? `${styles.open}` : ""}`}>
                <p>{text}</p>
                <div className={styles.arrowContainer}></div>
            </div>
            )}
        </div>
    );
  };

  export function ScrollArrow(props){

    return(
    <div className= {styles.scrollContainer}>
        <h5>Scroll</h5>
        <div className={styles.hexagonShape}></div>
    </div>
    )
}