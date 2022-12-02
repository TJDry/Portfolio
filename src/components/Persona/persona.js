import React from 'react';
import TextBox from '../textBox/text';
import './aboutUSStyle.scss'

export default Persona = () =>{
    return(
        <div className='persona-container'>
            <div className='flex'>
                <div className='personal-photo' style={{backgroundImage: `url("/images/${props.personaImage}.JPG")`}}></div>
                    <div className="intro-container">
                        <h2>{props.personaName}</h2><br></br>
                        <p>{props.personaBio}</p>
                </div>
            </div>
        </div>
    )
}


