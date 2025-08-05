import {useRef, useEffect} from 'react'
import TextBox, { Heading } from '../components/textBox/text'
import HomeHero from '../components/HomePageHero/HomeHero/homehero';
import ProjectGrid from '../components/ProjectGrid/projectGrid';
import AboutUs from '../components/About/About';
import Approach from '../components/Approach/Approach';
import gsap from 'gsap';
import { Spacer } from '../components/Button/button';
import Services from '../components/Services/Services';
import ContactForm from '../components/Contact/contact';

export default function Home(props) {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  const textRef = useRef();

  useEffect(() => {
    gsap.to(textRef.current, {
      backgroundPosition: "200% 50%",
      duration: 10,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });
  }, []);
  
  return (
    <div>
        <HomeHero headline={
          <>
            Jayden Dry –{" "}
            <span style={{fontFamily:"var(--accent-font)"}}ref={textRef} className="gradientText">Design & Project Manager</span>{" "}
            creating experiences that are meant to be lived
          </>
        } />
        <Approach/>
        <ProjectGrid/>
        <Services/>
        <ContactForm/>
    </div>
  )
}