import React from 'react';
import './showreelStyle.scss'

const Showreel = () =>{

    return(
        <div className='vid-container'> 
            <iframe title="Showreel" width='100%' height='100%' frameborder="0" allowfullscreen src='https://www.youtube.com/embed/V2F2nknYoQQ?controls=0?rel=0' allow="autoplay" muted volume='0' loop/>
        </div>
    )
}
export default Showreel