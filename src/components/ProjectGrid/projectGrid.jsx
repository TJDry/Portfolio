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
  const wrapperRef = useRef(null);

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
  if (!projectReveal.current) return;

  Array.from(projectReveal.current.children).forEach((child, i) => {
    gsap.fromTo(
      child,
      { x: 60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: child,
          scroller: ".projectGridWrapper",
          start: "left 80%",
          end: "right 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}, []);

useEffect(() => {
  const container = wrapperRef.current;
  if (!container) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  const onMouseDown = (e) => {
    isDown = true;
    container.classList.add('dragging');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  };
  const onMouseLeave = () => {
    isDown = false;
    container.classList.remove('dragging');
  };
  const onMouseUp = () => {
    isDown = false;
    container.classList.remove('dragging');
  };
  const onMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  };

  container.addEventListener("mousedown", onMouseDown);
  container.addEventListener("mouseleave", onMouseLeave);
  container.addEventListener("mouseup", onMouseUp);
  container.addEventListener("mousemove", onMouseMove);

  return () => {
    container.removeEventListener("mousedown", onMouseDown);
    container.removeEventListener("mouseleave", onMouseLeave);
    container.removeEventListener("mouseup", onMouseUp);
    container.removeEventListener("mousemove", onMouseMove);
  };
}, []);



  return (
    <div ref={wrapperRef} className={`${styles.projectGridWrapper} projectGridWrapper`}>
      <ul ref={projectReveal} className={styles.projectGrid}>
        {projectData.slice(0, 5).map((item, index) => (
          <li key={item.id} className={styles.projectItem}                   style={{
                    backgroundImage: `url(/images/${item.title}/${item.image[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}>
            <NavLink to={`/projects/${item.title}`} className={styles.projectLink}>
              <div className={styles.projectCard}>
                <div
                  className={styles.projectImage}
                />
                <div ref={(el) => (blobsRef.current[index] = el)} className={styles.fakeblob}>
                </div>
                <div className={styles.projectInfo}>
                  <h2>{item.title.replace(/([A-Z])/g, " $1").trim()}</h2>
                  <CallToActionButton active={isHovered === index} />
                </div>          
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
