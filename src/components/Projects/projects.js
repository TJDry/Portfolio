import React from 'react';
import styles from './projectsStyle.module.scss'
import { Link } from 'react-router-dom';

export default function Project(props) { 
    return(
        <>
        <Link to={`/${props.link}`}>
            <div className= {styles.projectContainer} style={{ backgroundImage: `url(${props.image})`}}>
                <span className= {styles.projectOverlay}>
                    <h1>{props.name}</h1><h3>{props.role}</h3>
                </span>
            </div>
        </Link>
        </>
    )
}