import React, { useEffect, useRef } from 'react'
import { NavLink } from "react-router-dom";
import styles from './projectGrid.module.scss'
import { projectData } from '../../projectData';
import { Tag } from '../Button/button';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function ProjectGrid() {
  const projectReveal = useRef(null);
  useEffect(()=>{
    const element = projectReveal.current;
    gsap.fromTo(
      element.children,
      {
        x: -40,
        opacity: 0,
      },
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
        }
      }
    );
  }, []);

  return (
    <div className={styles.projectGridBorder}>
      <ul ref={projectReveal} className={styles.projectGrid}>
        {projectData.map(item => (
          <li key={item.id} className={styles.projectItem}>
            <NavLink to={`/projects/${item.title}`} className={styles.projectLink}>
              <div className={styles.projectCard}>
                <img
                  src= {`/images/${item.title}/${item.image[0]}`}
                  alt={item.title}
                  className={styles.projectImage}
                />
                <div className={styles.projectInfo}>
                  <h2>{item.title}</h2>
                  <h3>{item.role}</h3>
                  <div className={styles.tagList}>
                    {item.tagList.map((tag,index) => (
                      <Tag key={index} 
                           tagTitle={tag}
                           className={styles.tag}
                      />
                    ))
                    }
                  </div>
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

