import React from 'react';
import {gsap} from 'gsap';
import { useImperativeHandle, useRef, forwardRef } from 'react';
import {motion} from 'framer-motion';

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
        
    return(<motion.div className="mouse"
    animate={{
        opacity: 1,
        height: 10,
        width: 10,
        fontSize: "20px",
        backgroundColor: "var(--accent-colour)",
        transition: {
            type: "spring",
            mass: 0.6,
        },
    }}
    ref={el}>
    </motion.div>);
});

export function onHoverEnter(){
}

export function onHoverLeave(){
}