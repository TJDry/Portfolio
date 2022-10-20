import React, {useEffect} from 'react'
// import { Link } from 'react-router-dom'
import Footer from '../components/Footer/footer'
import Hero from '../components/Hero/hero'
import Aboutus from '../components/AboutUs/aboutUs'
import Project from '../components/Projects/projects'
// import Skills from '../components/SkillCard/skill'
import { DownArrow } from '../components/social/socials'
import TextBox from '../components/textBox/text'

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
        <div className='projectList' style={{'width':'80%','display': 'flex', flexWrap: 'wrap',justifyContent:'center',alignTtems:'stretch', alignContent:'center', flexDirection:'wrap', 'position': 'relative', 'left': '10vw', textAlign: 'center', 'margin-bottom': '10vh'}}>
          <Project name="TYREWATCHER" role="UI DESIGNER & PROJECT MANAGER" image={require("../assets/images/tw/hero.png")} link='projects/tyrewatcher' width='50%'/>
          <Project name="OBDSCANZ" role="UI DESIGNER & PROJECT MANAGER" image={require("../assets/images/obdsz/hero.png")} link="projects/OBDScanz" width='50%'/>
          <Project name="GREMIO" role="UI UX DESIGNER" image={require("../assets/images/gr/hero.png")} link="projects/gremio" width='100%' />
          <Project name="BATTERY WATCHER" role="UI DESIGNER & PROJECT MANAGER" image={require("../assets/images/bw/hero.png")} link="projects/battwatcher" width='100%' />
        </div>
        <Footer />
    </div>
  )
}