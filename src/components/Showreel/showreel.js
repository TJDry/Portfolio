import React from 'react';
import styles from './showreelStyle.module.scss'

const Showreel = () =>{

    return(
        <div className={styles.vidContainer}> 
            <iframe title='showreel' src="https://www.youtube.com/embed/V2F2nknYoQQ?autoplay=1&mute=1&rel=0&controls=0&showinfo=0&modestbranding=1&VQ=HD1080&loop=1" loop={1} frameBorder="0" allowFullScreen />
        </div>
    )
}
export default Showreel