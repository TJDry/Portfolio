import React from "react";
import styles from './hexagonStyle.module.scss';
import Project from "../Projects/projects";
// import { useRef,useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

export default function HexagonProjekts(){
    return(
    <div className={styles.hexproMain}>
        <div className={styles.hexproContainer}>
          <div>
            <Project name="TYREWATCHER" role="UI DESIGNER & PROJECT MANAGER" image="/images/tw/hero.png" link='projects/tyrewatcher' />
          </div>
          <div>
            <Project name="OBDSCANZ" role="UI DESIGNER & PROJECT MANAGER" image= "/images/obdsz/hero.png" link="projects/OBDScanz" />
          </div><div>
            <Project name="GREMIO" role="UI UX DESIGNER" image="/images/gr/hero.png" link="projects/gremio" />
          </div><div>
            <Project name="BATTERY WATCHER" role="UI DESIGNER & PROJECT MANAGER" image="/images/bw/hero.png" link="projects/battwatcher" />
          </div><div>
            <Project name="ANDROID 11" role="UI DESIGNER" image="/images/a11/hero.png" link="projects/android11" />
          </div>
      </div>
    </div>
    )
}
