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
      <ProjectHero
        headline={project.title.replace(/([A-Z])/g, ' $1').trim()}
        role={project.role}
        gradientCircleColour={project.gradientColour}
        heroImage={project.image[0]}
        projectTitle={project.title}
      />
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
      <ImgContainer image1={project.image[0]} projectTitle={project.title} />
      <ProjectProcess projectTitle={project.title} leftComment={project.leftComment}/>
      <ImgContainer
        image1={project.image[1]}
        image2={project.image[2]}
        projectTitle={project.title}
      />
      <ColourCard item={project.colours}     />
      <Heading heading="User Research"/>
      <Heading heading="Design Process (Wireframes & Variants)"/>
      <NextPage />
    </div>
  );
}