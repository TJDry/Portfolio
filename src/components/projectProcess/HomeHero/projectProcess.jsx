import styles from './projectProcess.module.scss'
import { projectData } from '../../../projectData'

export default function ProjectProcess({ projectTitle, text, headings }) {
  const currentProject = projectData.find((project) => project.title === projectTitle);

  if (!currentProject || !currentProject[text]) {
    return <p>No data available for this project.</p>;
  }
  return (
    <div>
      {headings.map((heading, i) => (
        <div className={styles.caseStudyContainer} key={i}>
          <h2>{heading}</h2>
          <p>{currentProject[text][i]}</p>
        </div>
      ))}
    </div>
  );
}
