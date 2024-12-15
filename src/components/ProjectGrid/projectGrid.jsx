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
  const blobsRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (ev) => {
      const fakeblob = blobsRef.current[0]; // Assuming blobsRef is an array of elements
      if (!fakeblob) return;

      const rec = fakeblob.getBoundingClientRect();
      console.log("Bounding Rect:", rec);
      console.log("Mouse Position:", ev.clientX, ev.clientY);
      const x = ev.clientX - rec.left - rec.width / 2;
      const y = ev.clientY - rec.top - rec.height / 2;

      console.log(`Blob Transform: translate(${x}px, ${y}px)`);

      fakeblob.style.opacity = "1";

      fakeblob.animate(
        [
          {
            transform: `translate(${x}px, ${y}px)`,
          },
        ],
        {
          duration: 300,
          fill: "forwards",
        }
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    // GSAP Animation
    const element = projectReveal.current;

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
          start: "bottom center",
          end: "bottom center",
        },
      }
    );
  }, []);

  return (
    <>
    <div className={styles.projectGridBorder}>
      <ul ref={projectReveal} className={styles.projectGrid}>
        {projectData.slice(0, 4).map((item, index) => (
          <li key={item.id} className={styles.projectItem}>
            <NavLink to={`/projects/${item.title}`} className={styles.projectLink}>
              <div
                className={styles.projectCard}
                ref={(el) =>
                  (blobsRef.current[index] = {
                    blob: el.querySelector(`.blob`),
                    fakeblob: el.querySelector(`.fakeblob`),
                  })
                }
              >
                <img
                  src={`/images/${item.title}/${item.image[0]}`}
                  onMouseOver={(e) => (e.currentTarget.src = `/images/${item.title}/${item.image[1]}`)}
                  onMouseOut={(e) => (e.currentTarget.src = `/images/${item.title}/${item.image[0]}`)}
                  alt={item.title}
                  className={styles.projectImage}
                />
                <div className={styles.projectInfo}>
                  <h2>{item.title.replace(/([A-Z])/g, " $1").trim()}</h2>
                  <h4>{item.role}</h4>
                  <div className={styles.tagList}>
                    {item.tagList.map((tag, index) => (
                      <Tag key={index} tagTitle={tag} className={styles.tag} />
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.blob}></div>
              <div className={styles.fakeblob}></div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.secondaryProjectGridBorder}>
      <ul ref={projectReveal} className={styles.secondaryProjectGrid}>
        {projectData.slice(4,10).map(item => (
          <li key={item.id} className={styles.secondaryProjectItem}>
            <NavLink to={`/projects/${item.title}`} className={styles.secondaryProjectLink}>
              <div className={styles.secondaryProjectCard}>
                <div className={styles.secondaryProjectInfo}>
                  <h2>{item.title.replace(/([A-Z])/g, ' $1').trim()}</h2>
                  <h5>{item.role}</h5>
                  <div className={styles.tagList}>
                    {item.tagList.map((tag,index) => (
                      <Tag key={index} tagTitle={tag} className={styles.tag} />
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
    </>
  );
}
