import React, {useEffect} from 'react'
import Showreel from '../components/Showreel/showreel'
import TextBox, { Heading } from '../components/textBox/text'
import HomeHero from '../components/HomePageHero/HomeHero/homehero';
import ProjectGrid from '../components/ProjectGrid/projectGrid';
import AboutUs from '../components/About/About';
import SkillGrid from '../components/SkillGrid/skillGrid';
import GradientBackground from '../components/background/background';

export default function Home(props) {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
        <HomeHero   headline={
          <>
            I am Jay –{" "}
            <span className="accent">Design & Project Manager</span>{" "}
            who creates experiences that are meant to be lived
          </>
        } />
        <AboutUs
          heading="Working as a project & design manager for 2 years. 
          Creating digital solutions working with international developers, 
          aswell as utilising his skills to create his own creative solutions."
        />
        <SkillGrid />
        <ProjectGrid/>
        <Showreel />
    </div>
  )
}