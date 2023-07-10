import React, {useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import Skills from '../components/SkillCard/skill'
import Footer from '../components/Footer/footer';
import Navigation from '../components/Navigation/navigation'
import TextBox from '../components/textBox/text'
import { GradientCircle } from '../components/Button/button';

export default function Contact() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  // const [isHovering, setIsHovering] = useState(false)
  // onMouseEnter={()=> setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}
  return (
    <div>
        <Navigation/>
        <GradientCircle/>
        <TextBox 
          colorFlat="var(--text-colour)" 
          textColor="var(--text-colour)" 
          backgroundColor="" 
          heading="Work with us" 
          contentA=""
        />
        <Footer/>
    </div>
  )
}