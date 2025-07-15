import {useRef, useEffect} from 'react'
import TextBox, { Heading } from '../components/textBox/text'
import HomeHero from '../components/HomePageHero/HomeHero/homehero';
import ProjectGrid from '../components/ProjectGrid/projectGrid';
import AboutUs from '../components/About/About';
import Approach from '../components/Approach/Approach';
import gsap from 'gsap';
import { Spacer } from '../components/Button/button';

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
        <ProjectGrid/>
        <AboutUs
          heading="Hi, I'm Jay" 
          content="Friendly and motivated retail professional with a background in customer-facing roles and a passion for creating positive shopping experiences. Skilled in assisting customers, managing point-of-sale systems, handling stock, and maintaining store presentation standards. I thrive in fast-paced environments, enjoy working with diverse teams, and take pride in helping customers find what they need."
        />
        <Heading heading="Specialities"/>
        <Heading heading=""/>
        <Heading heading="Have an idea? We can help"/>
    </div>
  )
}