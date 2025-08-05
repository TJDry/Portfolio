import React, {useEffect} from 'react'
import HomeHero from '../components/HomePageHero/HomeHero/homehero';
import AboutUs, { WorkHistory } from '../components/About/About';
import SkillGrid from '../components/SkillGrid/skillGrid';
import Services from '../components/Services/Services';

export default function About() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  // const [isHovering, setIsHovering] = useState(false)
  // onMouseEnter={()=> setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}
  return (
    <>
    <HomeHero headline="About Me"/>
    <AboutUs/>
    <WorkHistory/>
    <Services/>
    </>
  )
}