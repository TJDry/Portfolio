import React from 'react';
import './showreelStyle.scss'

const Showreel = () =>{

    return(
        <div className='vid-container'> 
            <iframe title="Showreel" width='100%' height='100%' frameBorder="0" allowFullScreen src='https://www.youtube.com/embed/V2F2nknYoQQ?controls=0?rel=0'/>
        </div>
    )
}
export default Showreel