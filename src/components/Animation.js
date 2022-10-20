import {useEffect,useRef} from 'react';
import gsap from gsap;


export default function Animations(){
    const gsapRef = useRef();

    useEffect(() => {
        gsap.to(gsapRef.current, { rotation: "+=480" });
      });
    
}
