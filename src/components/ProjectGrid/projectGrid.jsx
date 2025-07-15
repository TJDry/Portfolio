import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from "react-router-dom";
import styles from './projectGrid.module.scss';
import { projectData } from '../../projectData';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CallToActionButton } from '../Button/button';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectGrid() {
  const projectReveal = useRef(null);
  const blobsRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (ev) => {
      blobsRef.current.forEach((blob) => {
        const rect = blob.parentElement.getBoundingClientRect(); // Parent container (projectCard)
        
        // Calculate position relative to the container
        const x = ev.clientX - rect.left - rect.width / 100;
        const y = ev.clientY - rect.top - rect.height + 10;
  
        // Apply the correct transformations
        blob.style.transform = `translate(${x}px, ${y}px)`;
        blob.style.opacity = "1";
      });
    };
  
    // Attach mousemove to the project grid
    const gridElement = projectReveal.current;
    gridElement.addEventListener("mousemove", handleMouseMove);
  
    return () => {
      gridElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  const [isHovered, setIsHovered] = useState(null);

  useEffect(() => {
    const element = projectReveal.current;

    // GSAP animation
    gsap.fromTo(
      element.children,
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.4,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  }, []);
  return (
    <>
      <div className={styles.projectGridBorder}>
        <ul ref={projectReveal} className={styles.projectGrid}>
          {projectData.slice(0, 5).map((item, index) => (
            <li key={item.id} className={styles.projectItem}>
              <NavLink to={`/projects/${item.title}`} className={styles.projectLink}>
                <div className={styles.projectCard}>
                  <img
                    src={`/images/${item.title}/${item.image[0]}`}
                    onMouseOver={(e) =>
                      // (e.currentTarget.src = `/images/${item.title}/${item.image[1]}`) 
                      // & 
                      setIsHovered(index)
                    }
                    onMouseOut={(e) =>
                      // (e.currentTarget.src = `/images/${item.title}/${item.image[0]}`) & 
                      setIsHovered(null)
                    }
                    alt={item.title}
                    className={styles.projectImage}
                  />
                  <div
                    ref={(el) => (blobsRef.current[index] = el)}
                    className={styles.fakeblob}
                  ></div>
                  <div className={styles.projectInfo}>
                    <h2>{item.title.replace(/([A-Z])/g, " $1").trim()}</h2>
                    <CallToActionButton active={isHovered === index}/>
                  </div>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
