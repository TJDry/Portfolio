import React from 'react';
import TextBox from '../textBox/text';
import './aboutUSStyle.scss'

const Aboutus = () =>{
    return(
        <div className='about-container'>
            <div className='flex'>
                <div className='personal-photo'></div>
                    <div className="intro-container">
                        <p>ABOUT ME</p><br></br>
                        <p>Heyo! I'm Jay<br></br>
                            I'm passionate about everything from Database design to Colour Psychology (bit of a wide spectrum hey).
                            I enjoy being pushed to the limits & want to change the world one solution at a time</p>
                        <button>
                            ABOUT ME<h4>→</h4>
                        </button>
                </div>
            </div>
            <TextBox
                contentA="I'm a Project & Design Manager, I love UI/UX & Software Development & Also dabble in graphic design and photography from time to time."
                contentB="I'm a Project & Design Manager, I love UI/UX & Software Development & Also dabble in graphic design and photography from time to time."
                contentC="I'm a Project & Design Manager, I love UI/UX & Software Development & Also dabble in graphic design and photography from time to time."
            />
        </div>
    )
}
export default Aboutus