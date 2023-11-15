import React, {useEffect} from 'react'
import AboutUs, { Heading } from '../components/About/About';
import HomeHero from '../components/HomePageHero/HomeHero/homehero';

export default function About() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  // const [isHovering, setIsHovering] = useState(false)
  // onMouseEnter={()=> setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}
  return (
    <>
    <HomeHero headline="About Me" subHeadline="Hi, I'm Jayden Dry.
    
    I have recently graduated from Curtin University with a Bachelor of Design in Digital,
      Majoring in Experience and Interaction Design. I have been working as a project & design
      manager for the past year, working with teams of international app developers to create
      digital solutions. I am passionate about human-centred design & enjoy both front end &
      backend development. I enjoy working collaboratively in a team environment and also
      work well independently."/>
    </>
  )
}