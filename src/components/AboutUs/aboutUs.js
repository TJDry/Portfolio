import React from 'react';
import './aboutUSStyle.scss'

const Aboutus = () =>{
    return(
        <div className='about-container'>
            <div className='flex'>
                <div className='personal-photo'></div>
                <div className="intro-container">
                    <p>Heyo! I'm <strong>Jay</strong><br></br>
                        I'm passionate about everything from Database design to Colour Psychology (bit of a wide spectrum hey).
                        I enjoy being pushed to the limits & want to change the world one solution at a time</p>
                </div>
            </div>
        </div>
    )
}
export default Aboutus