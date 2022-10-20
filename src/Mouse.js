import React from 'react';
import gsap from 'gsap';
import { useImperativeHandle, useRef, forwardRef } from 'react';

export const Mouse = forwardRef((props, ref) => {
    const el = useRef();
    
    useImperativeHandle(ref, () => {           
          
          // return our API
    return {
        moveTo(x, y) {
            gsap.to(el.current, { x, y });
            }
          };
    }, []);
        
    return <div className="mouse" ref={el}></div>;
});