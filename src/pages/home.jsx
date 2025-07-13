import {useRef, useEffect} from 'react'
import TextBox, { Heading } from '../components/textBox/text'
import HomeHero from '../components/HomePageHero/HomeHero/homehero';
import ProjectGrid from '../components/ProjectGrid/projectGrid';
import AboutUs from '../components/About/About';
import Approach from '../components/Approach/Approach';
import gsap from 'gsap';

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
            I am Jay –{" "}
            <span ref={textRef} className="gradientText">Design & Project Manager</span>{" "}
            creating experiences that are meant to be lived
          </>
        } />
        <Approach/>
        <Heading heading="Proper about me"/>
        <AboutUs
          heading="Working as a project & design manager for 2 years. 
          Creating digital solutions working with international developers, 
          aswell as utilising his skills to create his own creative solutions."
        />
        <Heading heading="Specialities"/>
        <Heading heading="Approach"/>
        <ProjectGrid/>
        <Heading heading=""/>
        <Heading heading="Have an idea? We can help"/>
    </div>
  )
}