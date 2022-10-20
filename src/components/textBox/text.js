import React from 'react';
import './textStyle.scss'

export default function TextBox(text){
    return(
        <div className='border-container'>
        <h1>{text.heading}</h1>
            <div className='flex'>
                <div className='text-container'><p>{text.contentA}</p></div>
                <div className='text-container'><p>{text.contentB}</p></div>
                <div className='text-container'><p>{text.contentC}</p></div>
            </div>
        </div>
    )
}