import styles from './socialsStyle.module.scss'
import { Icon } from '@iconify/react';
import Resume from '../../assets/images/JaydenDryResume.pdf'
import { onHoverEnter, onHoverLeave } from '../../Mouse';

export default function Socials(props){
    return (
        <div className= {`${styles.socialContainer}`} style={{top:`${props.top}`,right:`${props.right}`}}>
            <a href="https://behance.net/jay" target="rel=noopener" className={`${styles[props.class]}`}>
                <h3>BEHANCE</h3>
                <Icon icon="bxl:behance" className={`${styles.icon} ${styles[props.class]}`}/>
            </a>
            
            <a href="https://medium.com/@jaydendry"  target="rel=noopener" className={`${styles[props.class]}`}>                
            <h3>MEDIUM</h3>
            <Icon icon="bxl:medium" className={`${styles.icon} ${styles[props.class]}`}/>
            </a>
            <a href="https://instagram.com/jayden.dry"  target="rel=noopener" className={`${styles[props.class]}`}>                
            <h3>INSTAGRAM</h3>
                <Icon icon="bxl:instagram"  className={`${styles.icon} ${styles[props.class]}`} />
            </a>
            <a href="https://linkedin.com/in/jaydendry"  target="rel=noopener" className={`${props.class}`}>
            <h3>LINKEDIN</h3>
                <Icon icon="bxl:linkedin" className={`${styles.icon} ${styles[props.class]}`}/>
            </a>
            <a href={Resume}  target="_blank" rel="noreferrer" className={`${styles[props.class]}`}>
            <h3>RESUME</h3>
                <Icon icon="carbon:document" className={`${styles.icon} ${styles[props.class]}`}/>
            </a>
        </div>
    )
}
export function DownArrow(props){
    function ScrollDown(){
        window.scrollTo({top: 2000, left: 0, behavior: 'smooth'});
    }
    return(
    <div onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave} className= {styles.arrowContainer}  style={{top:`${props.top}`,right:`${props.right}`}}>
        <div className={styles.downContainer} onClick={ScrollDown}><h3>{props.buttonText}</h3><h4>→</h4></div>
    </div>
    )
}

export function ScrollArrow(props){

    return(
    <div className= {styles.scrollContainer}  style={{top:`${props.top}`,right:`${props.right}`}}>
        <h3>SCROLL</h3>
        <div className={styles.hexagonShape}></div>
    </div>
    )
}


export function SocialsMinimal(props){
    return (
        <div onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave} className= {`${styles.socialContainer} ${styles.minimal} ${styles.socialMinimalContainer}`} style={{top:`${props.top}`,right:`${props.right}`}}>
            <a href="https://behance.net/jay" target="rel=noopener" className={`${styles[props.class]}`}>
                <Icon icon="bxl:behance" className={`${styles.icon} ${styles[props.class]}`}/>
            </a>
            
            <a  onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave} href="https://github.com/Jaydendry"  target="rel=noopener" className={`${styles[props.class]}`}>                
            <Icon icon="bxl:github" className={`${styles.icon} ${styles[props.class]}`}/>
            </a>
            <a  onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave} href="https://instagram.com/jayden.dry"  target="rel=noopener" className={`${styles[props.class]}`}>                
                <Icon icon="bxl:instagram"  className={`${styles.icon} ${styles[props.class]}`} />
            </a>
            <a  onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave} href="https://linkedin.com/in/jaydendry"  target="rel=noopener" className={`${props.class}`}>
                <Icon icon="bxl:linkedin" className={`${styles.icon} ${styles[props.class]}`}/>
            </a>
            <a  onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave} href={Resume}  target="_blank" rel="noreferrer" className={`${styles[props.class]}`}>
                <Icon icon="carbon:document" className={`${styles.icon} ${styles[props.class]}`}/>
            </a>
        </div>
    )
}
