import React from 'react';
import './textStyle.scss'

export default function TextBox(text){
    return(
        <div className='border-container'>
            <h2 style={{color: `${text.colorFlat}`}}>{text.heading}</h2>
                <div className='flex'>
                    <div className='text-container'><h3>{text.headerA}</h3><p>{text.contentA}</p></div>
                    <div className='text-container'><h3>{text.headerB}</h3><p>{text.contentB}</p></div>
                    <div className='text-container'><h3>{text.headerC}</h3><p>{text.contentC}</p></div>
                </div>
                {/* <div className = {`imageContainer flex`}>
                    <img src={process.env.PUBLIC_URL + `/images/${text.abrProject}/${text.image1}.png`} alt="imageGoesHere"></img>
                    <img src={process.env.PUBLIC_URL + `/images/${text.abrProject}/${text.image2}.png`} alt="imageGoesHere"></img>
                    <img src={process.env.PUBLIC_URL + `/images/${text.abrProject}/${text.image3}.png`} alt="imageGoesHere"></img>
                </div> */}
        </div>
    )
}