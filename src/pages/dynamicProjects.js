import React, {useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import Skills from '../components/SkillCard/skill'
import { projectData } from '../projectData';
import Navigation from '../components/Navigation/navigation'
import TextBox, { Heading } from '../components/textBox/text'
import HomeHero from '../components/HomePageHero/HomeHero/homehero';
import Overview from '../components/Overview/overview';
import { useParams } from 'react-router-dom';
import ImgContainer from '../components/ImageContainer/imgContainer';
import ColourCard from '../components/ColourPalette/colourGrid';
import ProjectHero from '../components/ProjectHero/HomeHero/projectHero';
import NextPage from '../components/NextProject/nextProject';

export default function Projects() {
  
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  const { projectTitle } = useParams(); 
  const project = projectData.find((item) => item.title === projectTitle);
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
        <ProjectHero headline={project.title} gradientCircleColour={project.gradientColour} heroImage={project.image[0]} projectTitle={project.title}/>
        <Heading heading={project.title}/>
        <Overview 
          role={project.role} 
          year={project.year} 
          status={project.status} 
          managementStyle={project.managementStyle} 
          projectType={project.projectType}
        />
        <ImgContainer image1={project.image[0]} projectTitle={project.title}/>
        <ImgContainer image1={project.image[1]} image2={project.image[2]} projectTitle={project.title}/>
        <Heading heading="Mission" backgroundColor="var(--background-colour)" colorFlat="var(--text-colour)"/>
        <TextBox contentA={project.text[0]} contentB={project.text[1]} />
        <Heading heading="Objective" backgroundColor="var(--background-colour)" colorFlat="var(--text-colour)"/>
        <TextBox contentA={project.text[2]} contentB={project.text[3]} />
        <Heading heading="Obstacles" backgroundColor="var(--background-colour)" colorFlat="var(--text-colour)"/>
        <TextBox contentA={project.text[4]} contentB={project.text[5]} />
        <Heading heading="Process" backgroundColor="var(--background-colour)" colorFlat="var(--text-colour)"/>
        <Heading heading="Colour Palette" backgroundColor="var(--background-colour)" colorFlat="var(--text-colour)"/>
        <ColourCard colour1={project.colours[0]} colour2={project.colours[1]} colour3={project.colours[2]} colour4={project.colours[3]} colour5={project.colours[4]}/>
        <Heading heading="Persona" backgroundColor="var(--background-colour)" colorFlat="var(--text-colour)"/>
        {/* <ImgContainer image1={project.image[3]} image2={project.image[4]} projectTitle={project.title}/> */}
        <NextPage/>
    </div>
  )
}