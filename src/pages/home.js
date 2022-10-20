import React, {useEffect} from 'react'
// import { Link } from 'react-router-dom'
import Footer from '../components/Footer/footer'
import Hero from '../components/Hero/hero'
import Aboutus from '../components/AboutUs/aboutUs'
import Project from '../components/Projects/projects'
// import Skills from '../components/SkillCard/skill'
import { DownArrow } from '../components/social/socials'

export default function Home() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="container">
        <Hero heading="Hi, I'm Jayden Dry" headingLineTwo="Project & Design Manager" bgImg={require('../assets/images/background.jpg')}/>
        <DownArrow />
        <Aboutus />
        {/* <Skills /> */}
        <div className='projectList' style={{'width':'100%','display': 'flex', flexWrap: 'wrap',justifyContent:'center',alignTtems:'stretch', alignContent:'center', flexDirection:'wrap'}}>
          <Project name="Tyrewatcher" role="UI Designer & Project Manager" image={require("../assets/images/tw/hero.png")} link='projects/tyrewatcher' width='50%'/>
          <Project name="OBDScanz" role="UI Designer & Project Manager" image={require("../assets/images/obdsz/hero.png")} link="projects/OBDScanz" width='50%'/>
          <Project name="Gremio" role="UI Designer" image={require("../assets/images/gr/hero.png")} link="projects/gremio" width='100%' />
          <Project name="BatteryWatcher" role="UI Designer & Project Manager" image={require("../assets/images/bw/hero.png")} link="projects/battwatcher" width='100%' />
        </div>
        <Footer />
    </div>
  )
}