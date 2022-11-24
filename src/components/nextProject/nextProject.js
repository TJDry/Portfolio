import React from 'react';
import './nextProject.scss'
import { Link } from 'react-router-dom';

export default function nextProject(props) {
    return(
        <Link to={`/${props.link}`}>
            <div className="nextProject-container" style={{ backgroundImage: `linear-gradient(rgba(2, 2, 44,0.8),rgba(0, 6, 92,0.5)),url(${props.image})`}}>
                <h1 className="topHeader"> Next Project </h1>
                <h2 className='nextHeader'>{props.name}</h2><h3>{props.role}</h3>
            </div>
        </Link>
    )
}