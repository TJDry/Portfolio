import React from 'react';
import './nextProject.scss'
import { Link } from 'react-router-dom';

export default function nextProject(props) {
    return(
        <Link to={`/${props.link}`}>
            <div className="nextProject-container">
                <div className="nextProject" style={{ backgroundImage: `linear-gradient(rgb(90 90 205 / 80%), rgb(61 65 124)),url(${props.image})`}}> 
                    <h1 className="topHeader"> Next Project </h1>
                    <h2 className='nextHeader'>{props.name}</h2><h3>{props.role}</h3>
                </div>
            </div>
        </Link>
    )
}