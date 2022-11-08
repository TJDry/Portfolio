import React, {useEffect} from 'react'
// import { Link } from 'react-router-dom'
import Footer from '../components/Footer/footer'
import Hero from '../components/Hero/hero'
import Aboutus from '../components/AboutUs/aboutUs'
// import Skills from '../components/SkillCard/skill'
import { DownArrow } from '../components/social/socials'
import Hexagon from '../components/Hexagons/hexagon'
import HexagonProjekts from '../components/HexagonProjects/hexagonProjects'
export default function Home() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  // const [isHovering, setIsHovering] = useState(false)
  // onMouseEnter={()=> setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}
  return (
    <div className="container">
        <Hero heading="Hi, I'm Jayden Dry" headingLineTwo="Project & Design Manager" bgImg={require('../assets/images/background.jpg')}/>
        <DownArrow />
        <Aboutus />
        {/* <Skills /> */}
        <Hexagon top="17.5%" right="55%"/>
        <div className='projectList'>
        <HexagonProjekts />
        </div>
        <Footer />
        <Hexagon top="70%" right="0%"/>
    </div>
  )
}