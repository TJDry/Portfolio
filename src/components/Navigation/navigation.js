import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navigationStyle.scss';
import { NavBarData } from "./NavBarData";

export default function Navigation(){
    const [navBar,setNavBar] = useState(false);
    const showNav = () => setNavBar(!navBar);
    return(
        <>
            <div className="navigation-container" onClick={showNav}>
                <div className={navBar ? 'nav-btn active' : 'nav-btn'}></div>
            </div>
            <div className={navBar ? 'nav-menu active' : 'nav-menu'}>
                <ul>
                    {NavBarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                    <Link to={`/${item.path}`}>
                                        <span>{item.title}</span>
                                    </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}
