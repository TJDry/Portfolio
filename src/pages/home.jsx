import React, {useEffect} from 'react'
import Showreel from '../components/Showreel/showreel'
import TextBox, { Heading } from '../components/textBox/text'
import HomeHero from '../components/HomePageHero/HomeHero/homehero';
import ProjectGrid from '../components/ProjectGrid/projectGrid';
import AboutUs from '../components/About/About';
import SkillGrid from '../components/SkillGrid/skillGrid';

export default function Home() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
        <HomeHero headline="" subHeadline=""/>
        <Showreel />
        <ProjectGrid/>
        <SkillGrid />
        <Heading heading="Hi, I'm Jay" backgroundColor="var(--background-colour)" colorFlat="var(--text-colour)"/>
        <AboutUs/>
        <TextBox heading="" contentA="" backgroundColor="" colorFlat="var(--text-colour)"/>
    </div>
  )
}