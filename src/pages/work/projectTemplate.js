import React, {useEffect} from 'react'
import Text from '../../components/textBox/text'
import Images, {Triimages,Dualimages} from '../../components/imgContainer/imgContainer'
import NextProject from '../../components/nextProject/nextProject'
import './projectTemplateStyle.scss'
import ProjectHero from '../../components/ProjectHero/projectHero'
export default function ProjectPage (props) {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="container">
    <ProjectHero heading={props.heading} headingLineTwo={props.roles} bgImg={props.hero} color={props.color}/>
    <Text heading="Project Overview" contentA={props.overviewA} contentB={props.overviewB} contentC={props.overviewC} />
    <Images imgCont={props.Img} />
    <Text heading="Process" contentA={props.processA} contentB={props.processB} contentC={props.processC}/>
    <Triimages imgCont={props.thirdImg} imgCont2={props.thirdImg2} imgCont3={props.thirdImg3} />
    <Text heading="" contentA={props.processA} contentB={props.processB} contentC={props.processC}/>
    <Dualimages imgCont={props.secImg} imgCont2={props.secImg2} />
    <NextProject name={props.nextName} role={props.nextRole} image={props.nextImage} link={props.nextPage} />
    </div> 
  )
}