import styles from './projectHero.module.scss'
import { projectData } from '../../../projectData'

export default function ProjectHero(text) {
  const currentProject = projectData.find((project) => project.title === text.projectTitle);
  console.log(currentProject.processTextList);
  return (
    <>
    <div className={styles.container}>
      <div className={styles.backgroundAccent}></div>
      <h1>{text.headline}</h1>
      <h4 className={styles.role}>{text.role}</h4>
        <div className={styles.imgContainer} style={{backgroundImage: `url(${`/images/${text.projectTitle}/${text.heroImage}`})`}}></div>
    </div>
    </>
  )
}