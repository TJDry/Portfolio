import React, {useEffect} from 'react'
import Text from '../components/textBox/text'
import NextProject from '../components/nextProject/nextProject'
import Hero from '../components/Hero/hero'
import ImgContainer from '../components/imgContainer/imgContainer'
import Persona from '../components/Persona/persona'
import Footer from '../components/Footer/footer'
import Navigation from '../components/Navigation/navigation'
import { motion, useIsPresent } from "framer-motion";


export default function ProjectPage (props) {
  const isPresent = useIsPresent();
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div>
      <Navigation />
      <Hero 
        heading={props.heading} 
        headingLineTwo={props.roles} 
        bgImg={props.hero} 
        color={props.color} 
        colorFlat={props.colorFlat}
      />
      <ImgContainer 
        abrProject={props.abrProject} 
        image1={props.image1}
      />
      <Text 
        colorFlat={props.colorFlat} 
        heading="PROJECT OVERVIEW" 
        contentA={props.overviewA} 
        contentB={props.overviewB} 
        contentC={props.overviewC}
      />
      <ImgContainer 
        abrProject={props.abrProject} 
        image1={props.image2} 
        image2={props.image3} 
        image3={props.image4}
      />
      <Text 
        colorFlat={props.colorFlat}
        heading="PROCESS" 
        contentA={props.processA} 
        contentB={props.processB} 
        contentC={props.processC}
      />
      <ImgContainer 
        abrProject={props.abrProject} 
        image1={props.image5} 
        image2={props.image6} 
        image3={props.image7}
      />
      <Text 
        colorFlat={props.colorFlat} 
        heading="CONCLUSION" 
        contentA={props.conclusionA} 
        contentB={props.conclusionB} 
        contentC={props.conclusionC}
      />
      <ImgContainer 
        abrProject={props.abrProject} 
        image1={props.image8} 
        image2={props.image9} 
        image3={props.image10}
      />
      <Persona />
      <Persona />
      <Persona />
      <NextProject 
        name={props.nextName} 
        role={props.nextRole} 
        image={props.nextImage} 
        link={props.nextPage} 
      />
      <Footer />
      {/* <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1, ease: "circOut" } }}
        exit={{ scaleX: 2, transition: { duration: 1, ease: "circIn" } }}
        style={{ originX: isPresent ? 1 : 0 }}
        className="privacy-screen"
      /> */}
    </div> 
  )
}