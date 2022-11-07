import React, {useEffect} from 'react'
import Hero from '../../components/Hero/hero'
import Text from '../../components/textBox/text'
import Images, {DualimagesPhone, TriimagesPhone} from '../../components/imgContainer/imgContainer'
import NextProject from '../../components/nextProject/nextProject'
import { DownArrow } from '../../components/social/socials'
import './projectTemplateStyle.scss'
export default function ProjectPagePhone (props) {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="projectContainer">
        <Hero header={props.heading} role={props.roles} bgImg={props.hero} color={props.color}/>
        <DownArrow />
        <Text heading="Project Overview" contentA={props.overviewA} contentB={props.overviewB} contentC={props.overviewC} />
        <Images imgCont={props.Img} />
        <Text heading="Process" contentA={props.processA} contentB={props.processB} contentC={props.processC}/>
        <TriimagesPhone imgCont={props.thirdImg} imgCont2={props.thirdImg2} imgCont3={props.thirdImg3} />
        <Text heading="" contentA={props.processA} contentB={props.processB} contentC={props.processC}/>
        <DualimagesPhone imgCont={props.secImg} imgCont2={props.secImg2} />
        <NextProject name={props.nextName} role={props.nextRole} image={props.nextImage} link={props.nextPage} />
    </div> 
  )
}