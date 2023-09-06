import React, {useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import Skills from '../components/SkillCard/skill'
import Footer from '../components/Footer/footer';
import Navigation from '../components/Navigation/navigation'
import TextBox, { Heading } from '../components/textBox/text'
import { GradientCircle } from '../components/Button/button';
import HomeHero from '../components/HomePageHero/HomeHero/homehero';

export default function Contact() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  // const [isHovering, setIsHovering] = useState(false)
  // onMouseEnter={()=> setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}
  return (
    <div>
        <Navigation/>
        <HomeHero headline="Work with Us"/>
        <Heading heading="Work With Us" backgroundColor="var(--background-colour)" colorFlat="var(--text-colour)"/>
        <Footer textColor='var(--text-colour)' />
    </div>
  )
}