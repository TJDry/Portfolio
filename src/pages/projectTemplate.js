
import { useEffect } from 'react';
import Text from '../components/textBox/text'
import NextProject from '../components/nextProject/nextProject'
import Hero from '../components/Hero/hero'
import ImgContainer from '../components/imgContainer/imgContainer'
import Persona from '../components/Persona/persona'
import Footer from '../components/Footer/footer'
import Navigation from '../components/Navigation/navigation'

export default function ProjectPage(props) {
  const { heading, roles, color, colorFlat, hero, abrProject, image1, image2, image3, image4, processA, processB, processC, conclusionA, conclusionB, conclusionC, image5, image6, image7, image8, image9, image10, nextName, nextRole, nextImage, nextPage } = props;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
return (
  <div>
    <Navigation />
    <Hero
      heading={heading}
      headingLineTwo={roles}
      bgImg={hero}
      color={color}
      colorFlat={colorFlat}
    />
    <ImgContainer
      abrProject={abrProject}
      image1={image1}
    />
    <Text
      colorFlat={colorFlat}
      heading="PROJECT OVERVIEW"
      contentA={props.overviewA}
      contentB={props.overviewB}
      contentC={props.overviewC}
    />
    <ImgContainer
      abrProject={abrProject}
      image1={image2}
      image2={image3}
      image3={image4}
    />
    <Text
      colorFlat={colorFlat}
      heading="PROCESS"
      contentA={processA}
      contentB={processB}
      contentC={processC}
    />
    <ImgContainer
      abrProject={abrProject}
      image1={image5}
      image2={image6}
      image3={image7}
    />
    <Text
      colorFlat={colorFlat}
      heading="CONCLUSION"
      contentA={conclusionA}
      contentB={conclusionB}
      contentC={conclusionC}
    />
    <ImgContainer
      abrProject={abrProject}
      image1={image8}
      image2={image9}
      image3={image10}
    />
    <Persona />
    <Persona />
    <Persona />
    <NextProject
      name={nextName}
      role={nextRole}
      image={nextImage}
      link={nextPage}
    />
    <Footer />
  </div>
);
}