import React, { useState , useRef } from "react";
import { Link } from "react-router-dom";
import './navigationStyle.scss';
import { NavBarData } from "./NavBarData";

export default function Navigation(){
    const [isOpen,setIsOpen] = useState(false);

    const openRef = useRef();
    return(
        <>
            <div className="navigation-container" onClick={() => setIsOpen(!isOpen)}>
                <div className={isOpen ? 'nav-btn active' : 'nav-btn'}></div>
            </div>
            {/* <div className={isOpen ? 'nav-menu active' : 'nav-menu'}>
             */}
                <div 
                    className="nav-menu" 
                    ref={openRef}
                    style={isOpen 
                    ? {
                        width: "100vw",
                    }:{
                        width: "0px",
                    }}
                    >
                <ul>
                    {NavBarData.map((item, index) => {
                        return(
                            <>
                            <li 
                            key={index} 
                            className={item.cName}
                            style={isOpen 
                            ? {
                                width: "40%",
                                opacity: "1",
                            }:{
                                width: "0",
                                opacity: "0"
                            }}
                            >
                                <Link to={`/${item.path}`}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                            </>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}
