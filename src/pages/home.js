import React, {useEffect} from 'react'
// import { Link } from 'react-router-dom'
import Hero from '../components/Hero/hero'
// import Skills from '../components/SkillCard/skill'
import HexagonProjekts from '../components/HexagonProjects/hexagonProjects'
import Showreel from '../components/Showreel/showreel'
import Footer from '../components/Footer/footer';
import { Logo } from '../assets/icons'
import Navigation from '../components/Navigation/navigation'
import TextBox, { Heading } from '../components/textBox/text'
import { motion, useIsPresent } from "framer-motion";
export default function Home(props) {
  const isPresent = useIsPresent();
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  // const [isHovering, setIsHovering] = useState(false)
  // onMouseEnter={()=> setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}
  return (
    <div>
        <Logo />
        <Navigation />
        <Hero heading="Hi, I'm Jayden Dry" bgImg="url('/images/background.jpg')" />
        <TextBox colorFlat="var(--background-colour)" textColor="var(--background-colour)" backgroundColor="var(--accent-colour)" heading="ABOUT" contentA="I have recently graduated from Curtin University with a Bachelor of Design in Digital, Majoring in Experience and Interaction Design. I have been working as a project & design manager for the past year, working with teams of international app developers to create digital solutions. I am passionate about human-centred design & enjoy both front end & backend development. I enjoy working collaboratively in a team environment and also work well independently."/>
        <Heading heading="SHOWREEL" backgroundColor="var(--background-colour)" colorFlat="var(--accent-colour)"/>
        <Showreel />
        <Heading heading="PROJECTS" backgroundColor="var(--background-colour)" colorFlat="var(--accent-colour)"/>
        <HexagonProjekts />
        <TextBox heading="" contentA="" backgroundColor="var(--background-colour)" colorFlat="var(--accent-colour)"/>
        <Footer textColor='var(--accent-colour)' />
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0, transition: { duration: 2, ease: "circOut" } }}
          exit={{ scaleY: 2, transition: { duration: 1, ease: "circIn" } }}
          style={{ originY: isPresent ? 1 : 0 }}
          className="privacy-screen"
      />
    </div>
  )
}