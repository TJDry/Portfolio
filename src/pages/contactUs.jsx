import React, {useEffect} from 'react'
import HomeHero from '../components/HomePageHero/HomeHero/homehero';

export default function Contact() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  // const [isHovering, setIsHovering] = useState(false)
  // onMouseEnter={()=> setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}
  return (
    <div>
        <HomeHero headline="Work with Us"/>
    </div>
  )
}