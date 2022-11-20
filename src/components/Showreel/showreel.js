import React from 'react';
import './showreelStyle.scss'

const Showreel = () =>{

    return(
        <div className='vid-container'> 
            <iframe title='showreel' src="https://www.youtube.com/embed/V2F2nknYoQQ?autoplay=1&mute=1&rel=0&controls=0&showinfo=0&modestbranding=1&VQ=HD1080&loop=1" loop={1} frameBorder="0" allowFullScreen />
        </div>
    )
}
export default Showreel