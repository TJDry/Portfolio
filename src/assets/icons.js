import { Link } from 'react-router-dom';
import React from 'react';
import './iconsStyle.scss';


export const Logo = () =>{
    return(
        <div className='logo-container'>
            <Link to="/"><img src={process.env.PUBLIC_URL + "/images/BrandMarkFullColour.png"} width="54" className="hero-image" alt="Jayden Dry"></img></Link>
        </div>
    )
}