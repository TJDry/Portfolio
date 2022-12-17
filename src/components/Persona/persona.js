import React from 'react';
import styles from './personaStyle.module.scss'

export const Persona = (props) =>{
    return(
        <div className= {styles.personaContainer}>
            <div className={styles.flex}>
                <div className= {styles.personaPhoto} style={{backgroundImage: `url("/images/persona/${props.personaImage}.JPG")`}}></div>
                    <div className= {styles.personaIntroContainer}>
                        <h2>{props.personaName}</h2><br></br>
                        <p>{props.personaBio}</p>
                </div>
            </div>
        </div>
    )
}

export default Persona;

