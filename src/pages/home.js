import React, {useEffect} from 'react'
// import { Link } from 'react-router-dom'
import Hero from '../components/Hero/hero'
import Aboutus from '../components/AboutUs/aboutUs'
// import Skills from '../components/SkillCard/skill'
import HexagonProjekts from '../components/HexagonProjects/hexagonProjects'
import Showreel from '../components/Showreel/showreel'
import Footer from '../components/Footer/footer';
import { Logo } from '../assets/icons'
import Hexagon from '../components/Hexagons/hexagon'
import Navigation from '../components/Navigation/navigation'
export default function Home(props) {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  // const [isHovering, setIsHovering] = useState(false)
  // onMouseEnter={()=> setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}
  return (
    <div>
        <Logo />
        <Navigation />
        <Hexagon color={props.color}/>  
        <Hero heading="Hi, I'm Jayden Dry" headingLineTwo="Project & Design Manager" bgImg="url('/images/background.jpg')" />
        <Aboutus />
        <Showreel />
        <HexagonProjekts />
        <Footer />
    </div>
  )
}