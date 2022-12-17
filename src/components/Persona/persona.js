import React from 'react';
import './personaStyle.scss'

export const Persona = (props) =>{
    return(
        <div className='persona-container'>
            <div className='flex'>
                <div className='persona-photo' style={{backgroundImage: `url("/images/persona/${props.personaImage}.JPG")`}}></div>
                    <div className="persona-intro-container">
                        <h2>{props.personaName}</h2><br></br>
                        <p>{props.personaBio}</p>
                </div>
            </div>
        </div>
    )
}

export default Persona;

