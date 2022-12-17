import React, { useState , useRef } from "react";
import { Link } from "react-router-dom";
import styles from './navigationStyle.module.scss';
import { NavBarData } from "./NavBarData";

export default function Navigation(){
    const [isOpen,setIsOpen] = useState(false);

    const openRef = useRef();
    return(
        <>
            <div className={styles.navigationContainer} onClick={() => setIsOpen(!isOpen)}>
                <div className={isOpen ? `${styles.navBtn} ${styles.active}` : `${styles.navBtn}`}></div>
            </div>
                <div 
                    className={styles.navMenu} 
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
                            className={`${styles.navText} ${styles[item.cName]}`}
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
