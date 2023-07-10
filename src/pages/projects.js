import React, {useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import Skills from '../components/SkillCard/skill'
import HexagonProjekts from '../components/HexagonProjects/hexagonProjects'
import Showreel from '../components/Showreel/showreel'
import Footer from '../components/Footer/footer';
import Navigation from '../components/Navigation/navigation'
import TextBox, { Heading } from '../components/textBox/text'
import { motion, useIsPresent } from "framer-motion";
import HomeHero from '../components/HomePage/Hero/homehero';

export default function ProjectPage() {
  const isPresent = useIsPresent();
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  // const [isHovering, setIsHovering] = useState(false)
  // onMouseEnter={()=> setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}
  return (
    <div>
        <Navigation/>
        <HomeHero headline="Projects"/>
        <Heading heading="PROJECTS" backgroundColor="var(--background-colour)" colorFlat="var(--text-colour)"/>
        <HexagonProjekts />
        <Footer textColor='var(--text-colour)' />
        {/* <motion.div
        initial={{ scaleX: 2 }}
        animate={{ scaleX: 0, transition: { duration: 3, ease: "circOut" } }}
        exit={{ scaleX: 2, transition: { duration: 1, ease: "circIn" } }}
        style={{ originX: isPresent ? 1 : 0 }}
        className="privacy-screen"
      /> */}
    </div>
  )
}