import React, {useEffect} from 'react'
import Showreel from '../components/Showreel/showreel'
import TextBox, { Heading } from '../components/textBox/text'
import HomeHero from '../components/HomePageHero/HomeHero/homehero';
import ProjectGrid from '../components/ProjectGrid/projectGrid';
import AboutUs from '../components/About/About';
import SkillGrid from '../components/SkillGrid/skillGrid';

export default function Home(props) {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
        <HomeHero headline="Creating Unique Digital Experiences" subHeadline="Taking Web & App design to the next level"/>
        <Showreel />
        <Heading heading="ABOUT" backgroundColor="var(--background-colour)" colorFlat="var(--text-colour)"/>
        <AboutUs 
          content="I have recently graduated from Curtin University with a Bachelor of Design in Digital,
          Majoring in Experience and Interaction Design. I have been working as a project & design
          manager for the past year, working with teams of international app developers to create
          digital solutions. I am passionate about human-centred design & enjoy both front end &
          backend development. I enjoy working collaboratively in a team environment and also
          work well independently."
        />

        {/* <Heading heading="APPROACH" backgroundColor="var(--background-colour)" colorFlat="var(--text-colour)"/> */}
        <Heading heading="ABILITIES" backgroundColor="var(--background-colour)" colorFlat="var(--text-colour)"/>
        <SkillGrid />
        <Heading heading="PROJECTS" backgroundColor="var(--background-colour)" colorFlat="var(--text-colour)"/>
        <ProjectGrid/>
        <TextBox heading="" contentA="" backgroundColor="" colorFlat="var(--text-colour)"/>
    </div>
  )
}