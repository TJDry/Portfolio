import React from "react";
import './hexagonStyle.scss';
import Project from "../Projects/projects";
import { useRef,useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function HexagonProjekts(){
  const el = useRef();
  const tl = useRef();
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline()
        .to(".hexpro-container div", {
          scrollTrigger: {
            trigger: '.hexpro-main',
            duration: 2,
            start: "top top",
            yoyo: true,
            ease: "power4.inOut",
            stagger: {
                each: 0.3
            }
          }
        })
    }, el);
    return () => ctx.revert();
  }, []);
    return(
    <div class="hexpro-main">
        <div class="hexpro-container" ref={el}>
        <div>
          <Project name="TYREWATCHER" role="UI DESIGNER & PROJECT MANAGER" image={require("../../assets/images/tw/hero.png")} link='projects/tyrewatcher' />
        </div>
        <div>
          <Project name="OBDSCANZ" role="UI DESIGNER & PROJECT MANAGER" image={require("../../assets/images/obdsz/hero.png")} link="projects/OBDScanz" />
        </div><div>
          <Project name="GREMIO" role="UI UX DESIGNER" image={require("../../assets/images/gr/hero.png")} link="projects/gremio" />
        </div><div>
          <Project name="BATTERY WATCHER" role="UI DESIGNER & PROJECT MANAGER" image={require("../../assets/images/bw/hero.png")} link="projects/battwatcher" />
        </div><div>
          <Project name="ANDROID 11" role="UI DESIGNER" image={require("../../assets/images/a11/hero.png")} link="projects/android11" />
        </div>
    </div>
    </div>
    )
}
