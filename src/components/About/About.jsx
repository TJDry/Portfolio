import Approach from '../Approach/Approach';
import styles from './aboutUs.module.scss'

const workHistory = [
  {
    year: '2021 - 2023',
    title: 'Project & Design Manager',
    company: 'OBD2 Australia & VHEDIA',
    description: 'Led end-to-end UI/UX design for international app and web projects, creating design systems, conducting user research, producing interactive prototypes, and overseeing milestone-based development and quality testing.'
  },
  {
    year: '2017 - Present',
    title: 'UI/UX Designer, Graphic Designer & Photographer',
    company: 'Freelance',
    description: 'Designed responsive websites, developed branding strategies, created high-fidelity prototypes, and conducted A/B testing to optimise user engagement and conversion rates.'
  },
  {
    year: '2018 - 2019',
    title: 'Co-Creative Director',
    company: 'ASTRO Clothing',
    description: 'Collaborated with fellow designers to create a small-scale clothing brand, managing creative direction across live web and social media. Directed and photographed model and product shoots, handling editing and formatting for promotional and web use.'
  }
];

const AboutUs = () => {
  return (
    <section className={styles.about}>
      <div className={styles.profile}>
        <div className={styles.imageContainer}>
          <img src="/images/portraitImage.webp" alt="Portrait of Jayden Dry" />
        </div>
        <div className={styles.info}>
          <h1>Jayden Dry</h1>
          <p>
            Passionate UI/UX Designer with a strong background in
            digital experience and interaction design. Skilled in user
            research, wireframing, prototyping, and usability testing,
            with expertise in Figma, React and design systems. I love
            collaborating with developers internationally to create
            human-centered digital solutions, designing responsive
            interfaces, conducting A/B testing, and improving user
            engagement.
          </p>
          <p>
            Passionate about inclusive design, story-rich experiences, and shimmering chrome aesthetics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

export function WorkHistory(){
    return(
    <section className={styles.about}>
    <div className={styles.timeline}>
        <h2>Work History</h2>
        <ul>
          {workHistory.map((job, index) => (
            <li key={index}>
              <div className={styles.year}>{job.year}</div>
              <div className={styles.details}>
                <h3>{job.title} @ {job.company}</h3>
                <p>{job.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
    )
}


export function Heading(text){
        return(
        <div className={`${styles.borderSolo}`}>
            <h4 className={styles.headingSolo} style={{color: `${text.brandColour}`}}>{text.heading}</h4>
        </div>
        )
}