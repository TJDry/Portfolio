import React, {useEffect} from 'react'
// import { Link } from 'react-router-dom'
import Hero from '../components/Hero/hero'
import Aboutus from '../components/AboutUs/aboutUs'
// import Skills from '../components/SkillCard/skill'
import HexagonProjekts from '../components/HexagonProjects/hexagonProjects'
import Showreel from '../components/Showreel/showreel'
import { Logo } from '../assets/icons'
export default function Home() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  // const [isHovering, setIsHovering] = useState(false)
  // onMouseEnter={()=> setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}
  return (
    <div className="container">
        <Logo />
        <Hero heading="Hi, I'm Jayden Dry" headingLineTwo="Project & Design Manager" bgImg="url('/images/background.jpg')" />
        <Aboutus />
        {/* <Skills /> */}
        <Showreel />
        <div className='projectList'>
          <HexagonProjekts />
        </div>
    </div>
  )
}