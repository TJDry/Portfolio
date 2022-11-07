import React from "react";
import './hexagonStyle.scss';
import Project from "../Projects/projects";

export default function HexagonProjekts(){
    return(
    <div class="hexpro-main">
        <div class="hexpro-container">
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
