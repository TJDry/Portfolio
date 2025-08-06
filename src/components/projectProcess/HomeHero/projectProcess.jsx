import styles from './projectProcess.module.scss'
import { projectData } from '../../../projectData'

export default function ProjectProcess({ projectTitle, text, headings, startIndex = 0 }) {
  const currentProject = projectData.find((project) => project.title === projectTitle);

  if (!currentProject || !currentProject[text]) {
    return <p>No data available for this project.</p>;
  }

  // Slice processTextList from startIndex to startIndex + headings.length
  const slicedTexts = currentProject[text].slice(startIndex, startIndex + headings.length);

  return (
    <div className={styles.processContainer}>
      {headings.map((heading, i) => (
        <div className={styles.caseStudyContainer} key={i}>
          <h2>{heading}</h2>
          <p>{slicedTexts[i] || "No content available."}</p>
        </div>
      ))}
    </div>
  );
}