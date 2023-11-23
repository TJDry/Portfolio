import React, { useEffect, useRef } from 'react';
import styles from './showreelStyle.module.scss'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Showreel = () =>{
    const showreelScale = useRef(null);
    useEffect(()=>{
      const element = showreelScale.current;
      gsap.fromTo(
        element.children,
        {
          scale: 0.8,
        },
        {
          scale: 1,
          duration: 5,
          ease: "power1",
          scrollTrigger: {
            trigger: element,
            scrub: true,
            start: "-100%",
            end: "top center",
          }
        }
      );
    }, []);
    return(
        <div ref={showreelScale} className={styles.vidContainer}>
            <video width="80%" loop autoPlay muted>
                <source src={process.env.PUBLIC_URL + "/videos/DigEx_Jayden_Dry_Showreel.mp4"} type="video/mp4"/>
            </video>
            {/* <iframe title='showreel' src="https://www.youtube.com/embed/V2F2nknYoQQ?autoplay=1&mute=1&rel=0&controls=0&showinfo=0&modestbranding=1&VQ=HD1080&loop=1" loop={1} frameBorder="0" allowFullScreen /> */}
        </div>
    )
}
export default Showreel