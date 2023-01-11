import React from 'react';
import {gsap} from 'gsap';
import { useImperativeHandle, useRef, forwardRef } from 'react';
import {motion} from 'framer-motion';

export const Mouse = forwardRef((props, ref) => {
    const el = useRef();

    // const Variants = {
    //     default: {
    //         opacity: 1,
    //         height: 10,
    //         width: 10,
    //         fontSize: "20px",
    //         backgroundColor: "var(--accent-colour)",
    //         transition: {
    //             type: "spring",
    //             mass: 0.6,
    //         },
    //     },
    //     hover: {
    //         opacity: 1,
    //         height: 50,
    //         width: 50,
    //         fontSize: "20px",
    //         backgroundColor: "var(--accent-colour)",
    //         transition: {
    //             type: "spring",
    //             mass: 0.2,
    //         },
    //     },
    // }

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
    // setCursorVariant("hover")
}

export function onHoverLeave(){
    // setCursorVariant("default")
}