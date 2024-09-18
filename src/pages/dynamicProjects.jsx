import React, {useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import Skills from '../components/SkillCard/skill'
import { projectData } from '../projectData';
import Navigation from '../components/Navigation/navigation'
// import TextBox, { Heading } from '../components/textBox/text'
import HomeHero from '../components/HomePageHero/HomeHero/homehero';
import Overview from '../components/Overview/overview';
import { useParams } from 'react-router-dom';
import ImgContainer from '../components/ImageContainer/imgContainer';
import ColourCard from '../components/ColourPalette/colourGrid';
import ProjectHero from '../components/ProjectHero/HomeHero/projectHero';
import NextPage from '../components/NextProject/nextProject';
import ProjectProcess from '../components/projectProcess/HomeHero/projectProcess';
import { Spacer } from '../components/Button/button';

export default function Projects() {

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
        <ProjectHero headline={project.title.replace(/([A-Z])/g, ' $1').trim()} heroImage={project.image[0]} projectTitle={project.title}/>
        <Spacer width="90%"/>
        <Overview overview={project.overview}/>
        <ImgContainer image1={project.image[0]} projectTitle={project.title}/>
        <ProjectProcess projectTitle={project.title} experienceText={project.experienceText}/>
        <ImgContainer image1={project.image[1]} image2={project.image[2]} projectTitle={project.title}/>
        <ColourCard colour1={project.colours[0]} colour2={project.colours[1]} colour3={project.colours[2]} colour4={project.colours[3]} colour5={project.colours[4]}/>
        <NextPage/>
    </div>
  )
}