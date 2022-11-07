import React from 'react';
import './projectsStyle.scss'
import { Link } from 'react-router-dom';
import { useEffect,useRef } from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';
import Hexagon from '../Hexagons/hexagon';
gsap.registerPlugin(ScrollTrigger);


export default function Project(props) { 
    const gsapRef = useRef();

    useEffect(() => {
        gsap.to(gsapRef.current, { 
            x: 0,
            duration: 1,
            ease: "ease-4",
            start: "top",
            scrollTrigger: {
              trigger: ".project-container"
            }
        })
    })
    return(
        <>
        <Link to={`/${props.link}`} style={{"width":`40%`}}>
            <div className="project-container" ref={gsapRef} style={{ backgroundImage: `url(${props.image})`}}>
                <span className='project-overlay'>
                    <h1>{props.name}</h1><h3>{props.role}</h3>
                </span>
            </div>
        </Link>
        </>
    )
}