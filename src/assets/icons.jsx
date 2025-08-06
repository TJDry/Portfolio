import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import styles from './iconsStyle.module.scss';


export const Logo = () =>{
    return(
        <div className= {styles.logoContainer}>
            <NavLink to="/"><img src={"/images/BrandMarkWhiteNew.png"} width="64" className="hero-image" alt="Jayden Dry"></img></NavLink>
        </div>
    )
}