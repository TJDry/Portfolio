import React from 'react';
import TextBox from '../textBox/text';
import styles from './aboutUSStyle.module.scss'

const Aboutus = () =>{
    return(
        <div className={styles.aboutContainer}>
            <div className={styles.flex}>
                <div className={styles.personalPhoto} style={{backgroundImage: 'url("/images/me.JPG")'}}></div>
                    <div className={styles.introContainer}>
                        <h2>ABOUT ME</h2><br></br>
                        <p>Hi! I'm Jay<br></br>
                            I'm passionate about everything from Database design to Colour Psychology (bit of a wide spectrum hey).
                            I enjoy being pushed to the limits & am working towards changing the world one solution at a time</p>
                </div>
            </div>
            <TextBox
                contentA="With my experience in creating mobile and web designs, I'm able to establish a strong connection working with developers and ensure the message gets across clearly."
                contentB="By utilising my experience in design management and UI UX design I am able to create responsive web applications that hit the ground running to ensure your brand goes far."
                contentC="I always strive to create visual experiences that both follow and stray away from current trends. Whether its a battery app or an OS theme, each creation has its own personality to it."
                headerA="Project & Design Management"
                headerB="Front-End Development"
                headerC="Mobile and Web Design"
            />
        </div>
    )
}
export default Aboutus


