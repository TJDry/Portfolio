import React from 'react';
import './projectsStyle.scss'
import { Link } from 'react-router-dom';

export default function Project(props) { 
    return(
        <Link to={`/${props.link}`} style={{"width":`${props.width}`}}>
            <div className="project-container" style={{ backgroundImage: `linear-gradient(rgba(2, 2, 44,0.2),rgba(0, 6, 92,0.3)),url(${props.image})`}}>
                <div className='project-overlay'>
                    <h1>{props.name}</h1><h3>{props.role}</h3>
                </div>
            </div>
        </Link>
    )
}