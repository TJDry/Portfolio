import './socialsStyle.scss'
import { Icon } from '@iconify/react';
import Resume from '../../assets/images/JaydenDryResume.pdf'


export default function Socials(props){


    return (
        <div className="social-container" style={{top:`${props.top}`,right:`${props.right}`}}>
            <a href="https://behance.net/jay" target="rel=noopener">
                <h3>BEHANCE</h3>
                <Icon icon="bxl:behance" className='icon' style={{
            }} />
            </a>
            
            <a href="https://github.com/Jaydendry"  target="rel=noopener">
                <h3>GITHUB</h3>
                <Icon icon="bxl:github" className='icon'  style={{
            }} />
            </a>
            <a href="https://instagram.com/jayden.dry"  target="rel=noopener">
                <h3>INSTAGRAM</h3>
                <Icon icon="bxl:instagram"  className='icon' style={{
            }} />
            </a>
            <a href="https://linkedin.com/in/jaydendry"  target="rel=noopener">
                <h3>LINKEDIN</h3>
                <Icon icon="bxl:linkedin" className='icon'  style={{
                    // 'backgroundColor': 'rgba(0,255,0,0.8)',
                    // "clip-path": 'polygon(0.25 0.05, 0.75 0.05, 1 0.5, 0.75 0.95, 0.25 0.95, 0 0.5)'
            }} />
            </a>
            <a href={Resume}  target="_blank" rel="noreferrer">
                <h3>RESUME</h3>
                <Icon icon="carbon:document" className='icon'  style={{
                    // 'backgroundColor': 'rgba(0,255,0,0.8)',
                    // "clip-path": 'polygon(0.25 0.05, 0.75 0.05, 1 0.5, 0.75 0.95, 0.25 0.95, 0 0.5)'
            }} />
            </a>
        </div>
    )
}
export function DownArrow(props){
    function ScrollDown(){
        window.scrollTo({top: 1200, left: 0, behavior: 'smooth'});
    }
    return(
    <div className='arrow-container'  style={{top:`${props.top}`,right:`${props.right}`}}>
        <div className='down-container' onClick={ScrollDown}><h3>VIEW MY WORK</h3><h4>→</h4></div>
    </div>
    )
}
