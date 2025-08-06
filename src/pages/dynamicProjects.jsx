import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projectData } from '../projectData';
import Navigation from '../components/Navigation/navigation';
import HomeHero from '../components/HomePageHero/HomeHero/homehero';
import Overview from '../components/Overview/overview';
import ImgContainer from '../components/ImageContainer/imgContainer';
import ColourCard from '../components/ColourPalette/colourGrid';
import ProjectHero from '../components/ProjectHero/HomeHero/projectHero';
import NextPage from '../components/NextProject/nextProject';
import ProjectProcess from '../components/projectProcess/HomeHero/projectProcess';
import { Spacer } from '../components/Button/button';
import { Heading } from '../components/textBox/text';

export default function Projects() {
  const { projectTitle } = useParams();
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const project = projectData.find(
    (item) => item.title.toLowerCase() === projectTitle.toLowerCase()
  );

  if (!project) {
    return (
      <>
        <Navigation />
        <HomeHero headline="404 Project Not Found" />
      </>
    );
  }

  return (
    <div>
      {/*HERO*/}
      <ProjectHero
        headline={project.title.replace(/([A-Z])/g, ' $1').trim()}
        role={project.role}
        gradientCircleColour={project.gradientColour}
        heroImage={project.image[0]}
        projectTitle={project.title}
      />

      {/*OVERVIEW*/}
      <Overview
        role={project.role}
        year={project.year}
        status={project.status}
        overviewContent={project.overview}
        managementStyle={project.managementStyle}
        projectType={project.projectType}
        softwareTitle={project.softwareTitle}
        softwareList={project.softwareList}
        href={project.websiteLink} // Pass it properly
      />

      <ImgContainer
        image1={project.image[1]}
        image2={project.image[2]}
        projectTitle={project.title}
      />
      <ProjectProcess
        projectTitle={project.title}
        text="processTextList"
        headings={["Goals", "The challenge"]}
        startIndex={0}
      />    
      <ImgContainer
        image1={project.image[3]}
        image2={project.image[4]}
        projectTitle={project.title}
      />
      
      {/*PROCESS*/}
      <ProjectProcess
        projectTitle={project.title}
        text="processTextList"
        headings={["Process"]}
        startIndex={2}
      />
            <ImgContainer
        image1={project.image[5]}
        image2={project.image[6]}
        projectTitle={project.title}
      />
      <ProjectProcess
        projectTitle={project.title}
        text="processTextList"
        headings={["Research"]}
        startIndex={3}
      />
      <ProjectProcess
        projectTitle={project.title}
        text="processTextList"
        headings={["Brand Identity System"]}
        startIndex={4}
      />
      <ColourCard item={project.colours}     />
        <ProjectProcess
        projectTitle={project.title}
        text="processTextList"
        headings={["Wireframing"]}
        startIndex={5}
      />
      <ImgContainer
        image1={project.image[7]}
        image2={project.image[8]}
        projectTitle={project.title}
      />
      
      {/*PRODUCTION*/}
      <ProjectProcess
        projectTitle={project.title}
        text="processTextList"
        headings={["UI Design"]}
        startIndex={6}
      />
      <ProjectProcess
        projectTitle={project.title}
        text="processTextList"
        headings={["Development Process"]}
        startIndex={7}
      />     
      <NextPage /> {/*Redo this*/}
    </div>
  );
}