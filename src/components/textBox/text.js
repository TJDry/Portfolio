import React from 'react';
import './textStyle.scss'

export default function TextBox(text){
    if (text.contentC !== undefined) {
        return(
            <div className='border-container'>
                <h2 style={{color: `${text.colorFlat}`}}>{text.heading}</h2>
                    <div className='flex'>
                        <div className='text-container'><h3>{text.headerA}</h3><p>{text.contentA}</p></div>
                        <div className='text-container'><h3>{text.headerB}</h3><p>{text.contentB}</p></div>
                        <div className='text-container'><h3>{text.headerC}</h3><p>{text.contentC}</p></div>
                    </div>
            </div>
        )
    } else if (text.contentB !== undefined){
        return(
        <div className='border-container'>
            <h2 style={{color: `${text.colorFlat}`}}>{text.heading}</h2>
                <div className='flex'>
                    <div className='text-container'><h3>{text.headerA}</h3><p>{text.contentA}</p></div>
                    <div className='text-container'><h3>{text.headerB}</h3><p>{text.contentB}</p></div>
                </div>
        </div>
        )
    } else if (text.contentA !== undefined) {
        return(
        <div className='border-container'>
        <h2 style={{color: `${text.colorFlat}`}}>{text.heading}</h2>
            <div className='flex'>
                <div className='text-container'><h3>{text.headerA}</h3><p>{text.contentA}</p></div>
            </div>
        </div>
        )
    } else {
        return('')
    }
}