import React, {useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import Skills from '../components/SkillCard/skill'
import Showreel from '../components/Showreel/showreel'
import Footer from '../components/Footer/footer';
import Navigation from '../components/Navigation/navigation'
import TextBox, { Heading } from '../components/textBox/text'
import HomeHero from '../components/HomePageHero/HomeHero/homehero';
import ProjectGrid from '../components/ProjectGrid/projectGrid';

export default function Home(props) {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
        <HomeHero headline="crafting unique digital experiences"/>
        {/* <TextBox 
          heading="ABOUT" 
          contentA="I have recently graduated from Curtin University with a Bachelor of Design in Digital,
          Majoring in Experience and Interaction Design. I have been working as a project & design
          manager for the past year, working with teams of international app developers to create
          digital solutions. I am passionate about human-centred design & enjoy both front end &
          backend development. I enjoy working collaboratively in a team environment and also
          work well independently."
        /> */}
        <Showreel />
        <Heading heading="PROJECTS" backgroundColor="var(--background-colour)" colorFlat="var(--text-colour)"/>
        <ProjectGrid/>
        <TextBox heading="" contentA="" backgroundColor="" colorFlat="var(--text-colour)"/>
        <Footer textColor='var(--text-colour)' />
    </div>
  )
}