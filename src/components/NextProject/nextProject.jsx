import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectData } from '../../projectData';
import styles from './nextProject.module.scss'

export default function NextPage(){
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, []);
    
    const { projectTitle } = useParams();
    const navigate = useNavigate(); // Use useNavigate to get the navigation function

    const currentIndex = projectData.findIndex((item) => item.title === projectTitle);
    const nextProjectIndex = (currentIndex + 1) % projectData.length; // Loop back to the first project if at the end
  
    const nextProject = projectData[nextProjectIndex];
  
    const navigateToNextProject = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        setTimeout(() => {
            navigate(`/projects/${nextProject.title}`);
        }, 100); // Use navigate to navigate to the next project
      };
    
    return(
        <div className={styles.container}>
            <button onClick={navigateToNextProject}
            style={
                {backgroundImage: `url(${process.env.PUBLIC_URL + `/images/${nextProject.title}/${nextProject.image[0]}`})`}
            }
            className={styles.nextPageButton}
            >
                <h2>Next Project: {nextProject.title}</h2>
            </button>
        </div>
    )
}