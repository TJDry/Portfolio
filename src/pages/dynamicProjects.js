import React, {useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import Skills from '../components/SkillCard/skill'
import Footer from '../components/Footer/footer';
import { projectData } from '../components/ProjectGrid/projectData';
import Navigation from '../components/Navigation/navigation'
import { Heading } from '../components/textBox/text'
import HomeHero from '../components/HomePageHero/HomeHero/homehero';
import Overview from '../components/Overview/overview';
import { useParams } from 'react-router-dom';

export default function Projects() {
  
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  const { projectTitle } = useParams();

  console.log('projectTitle:', projectTitle);
  console.log('projectData:', projectData);
  
  const project = projectData.find((item) => item.title === projectTitle);
  
  console.log('project:', project);
  

  if (!project) {
    return(
      <>
      <Navigation/>
      <HomeHero headline="404 Project Not Found"/>
      </>
    )
  }
  return (
    <div>
        <Navigation/>
        <HomeHero headline={project.title}/>
        <Heading heading={project.title}/>
        <Overview 
          role={project.role} 
          year={project.year} 
          status={project.status} 
          managementStyle={project.managementStyle} 
          projectType={project.projectType}
        />
        <Footer/>
    </div>
  )
}