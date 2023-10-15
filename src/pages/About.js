import React, {useEffect} from 'react'
import { Heading } from '../components/textBox/text'
import HomeHero from '../components/HomePageHero/HomeHero/homehero';

export default function About() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  // const [isHovering, setIsHovering] = useState(false)
  // onMouseEnter={()=> setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}
  return (
    <div>
        <HomeHero headline="About Us"/>
        <Heading heading="About Us" backgroundColor="var(--background-colour)" colorFlat="var(--text-colour)"/>
    </div>
  )
}