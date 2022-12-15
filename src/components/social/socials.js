import './socialsStyle.scss'
import { Icon } from '@iconify/react';
import Resume from '../../assets/images/JaydenDryResume.pdf'


export default function Socials(props){
    return (
        <div className="social-container" style={{top:`${props.top}`,right:`${props.right}`}}>
            <a href="https://behance.net/jay" target="rel=noopener">
                <h3>BEHANCE</h3>
                <Icon icon="bxl:behance" className='icon'/>
            </a>
            
            <a href="https://github.com/Jaydendry"  target="rel=noopener">
                <h3>GITHUB</h3>
                <Icon icon="bxl:github" className='icon'/>
            </a>
            <a href="https://instagram.com/jayden.dry"  target="rel=noopener">
                <h3>INSTAGRAM</h3>
                <Icon icon="bxl:instagram"  className='icon'/>
            </a>
            <a href="https://linkedin.com/in/jaydendry"  target="rel=noopener">
                <h3>LINKEDIN</h3>
                <Icon icon="bxl:linkedin" className='icon'/>
            </a>
            <a href={Resume}  target="_blank" rel="noreferrer">
                <h3>RESUME</h3>
                <Icon icon="carbon:document" className='icon' />
            </a>
        </div>
    )
}
export function DownArrow(props){
    function ScrollDown(){
        window.scrollTo({top: 2000, left: 0, behavior: 'smooth'});
    }
    return(
    <div className='arrow-container'  style={{top:`${props.top}`,right:`${props.right}`}}>
        <div className='down-container' onClick={ScrollDown}><h3>{props.buttonText}</h3><h4>→</h4></div>
    </div>
    )
}
export function SocialsMinimal(props){
    return (
        <div className= {`social-container minimal`} style={{top:`${props.top}`,right:`${props.right}`}}>
            <a href="https://behance.net/jay" target="rel=noopener" className={`${props.class}`}>
                <Icon icon="bxl:behance" className={`icon ${props.class}`}/>
            </a>
            
            <a href="https://github.com/Jaydendry"  target="rel=noopener" className={`${props.class}`}>                
            <Icon icon="bxl:github" className='icon'/>
            </a>
            <a href="https://instagram.com/jayden.dry"  target="rel=noopener" className={`${props.class}`}>                
                <Icon icon="bxl:instagram"  className={`icon ${props.class}`} />
            </a>
            <a href="https://linkedin.com/in/jaydendry"  target="rel=noopener" className={`${props.class}`}>
                <Icon icon="bxl:linkedin" className={`icon ${props.class}`}/>
            </a>
            <a href={Resume}  target="_blank" rel="noreferrer" className={`${props.class}`}>
                <Icon icon="carbon:document" className={`icon ${props.class}`}/>
            </a>
        </div>
    )
}
