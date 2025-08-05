import React, { useEffect, useRef, useState } from 'react';
import styles from './button.module.scss'
import { Icon } from '@iconify/react';
import Arrow from '../../assets/svgs/arrow.svg'
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
            <Icon icon={softwareName} style={{ fontSize: '34px', color: 'white' }} />
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
    const scrollButtonRef = useRef(null);
    useEffect(() =>{
        gsap.to(scrollButtonRef.current, {
            duration: 0.5,   // speed of bounce
            repeat: -1,
            y: 30,
            yoyo: true,      // bounce back
            ease: "power.inOut"
        }

        )
    }
)
    return(
    <div className= {styles.scrollContainer}>
        <h5 style={{ transform: 'rotate(90deg)' }}>Scroll</h5>
        <div ref={scrollButtonRef} className={styles.hexagonShape}></div>
    </div>
    )
}

  export const CallToActionButton =({active}) =>{
    const buttonRef = useRef(null);
    const arrowRef = useRef(null);

    useEffect(() => {
        if (active) {
        gsap.to(buttonRef.current, {
            opacity: 1,
            scale: 1,
            rotation:'+135',
            border: '0',
            background: 'rgba(117, 117, 117, 0.81)',
            duration: 0.8,
            ease: 'power3.out',
        });
        gsap.to(arrowRef.current, {
            filter: "invert(0)"
        })
        } else {
        gsap.to(buttonRef.current, {
            opacity: 0.6,
            scale: 0.8,
            rotation:'+90',
            duration: 0.8,
            background: 'linear-gradient(60deg, rgba(255,255,255,0.1),rgba(255,255,255,0.3),rgba(255,255,255,0.1) )',
            border: '2px solid rgba(122, 122, 122, 0.33)',
            ease: 'power3.in',
        });
            gsap.to(arrowRef.current, {
                filter: "invert(0.6)"
            })
        }
    }, [active]);
    return(
    <button ref={buttonRef} className= {active ? `${styles.callToAction} ${styles.active}` : `${styles.callToAction}`}>
        <img ref={arrowRef} src={Arrow} alt="React Logo" />
    </button>
    )
}