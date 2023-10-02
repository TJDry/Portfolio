import React, {useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import Skills from '../components/SkillCard/skill'
import Footer from '../components/Footer/footer';
import { projectData } from '../components/ProjectGrid/projectData';
import Navigation from '../components/Navigation/navigation'
import TextBox, { Heading } from '../components/textBox/text'
import HomeHero from '../components/HomePageHero/HomeHero/homehero';
import Overview from '../components/Overview/overview';
import { useParams } from 'react-router-dom';
import ImgContainer from '../components/ImageContainer/imgContainer';

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
        <HomeHero headline={project.title} gradientCircleColour={project.gradientColour}/>
        <Heading heading={project.title}/>
        <Overview 
          role={project.role} 
          year={project.year} 
          status={project.status} 
          managementStyle={project.managementStyle} 
          projectType={project.projectType}
        />
        <ImgContainer image1={project.image[0]} abrProject={project.projectAbbreviation}/>
        <TextBox headerA="" contentA={project.text[0]} contentB={project.text[1]} />
        <ImgContainer image1={project.image[1]} image2={project.image[2]} abrProject={project.projectAbbreviation}/>
        <TextBox headerA="" contentA={project.text[2]} contentB={project.text[3]} />
        <ImgContainer image1={project.image[3]} image2={project.image[4]} abrProject={project.projectAbbreviation}/>
    </div>
  )
}