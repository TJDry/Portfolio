import Approach from '../Approach/Approach';
import styles from './aboutUs.module.scss'

const workHistory = [
  {
    year: '2025',
    title: 'Senior UX Designer',
    company: 'PixelCraft Co.',
    description: 'Led a team of 5 in redesigning enterprise platforms.'
  },
  {
    year: '2023',
    title: 'UI Designer',
    company: 'Dreamloop Studios',
    description: 'Designed interactive experiences for mobile games.'
  },
  {
    year: '2021',
    title: 'Design Intern',
    company: 'Noble Minds',
    description: 'Supported the design team with brand identity projects.'
  }
];

const AboutUs = () => {
  return (
    <section className={styles.about}>
      <div className={styles.profile}>
        <div className={styles.imageContainer}>
          <img src="/images/portraitImage.jpg" alt="Your Portrait" />
        </div>
        <div className={styles.info}>
          <h1>Jay Licht</h1>
          <p>
            I’m a designer who merges softness and structure—equally in love with clean lines and creative expression. 
            From fashion to UX, I care deeply about meaningful design and magical interactions.
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