import ProjectPage from "../projectTemplate";

export default function Android11(){
    return(
            <ProjectPage
                color="linear-gradient(45deg,#8B0001,#C34632)"
                colorFlat="#C34632"
                heading="Android 11"
                roles="Project & Design Manager"
                hero={require("../../../assets/images/a11/hero.png")}

                overviewA="VHEDIA currently utilises Android 10 grid-layout to create their theme for their products, I also created a BMW X-Series display aswell to suite wider displays."

                overviewB="I was tasked with enhancing this theme for our upgrade to Android 11, where we can start refining the widget system and developing the theme out further with custom app logos and system design beyond the load screen"

                overviewC="Although this wont be possible for a period of time, we have started to formally implement it partially as a theme and are waiting on the suppliers to get back to us with the new theme."

                processA="For this theme I was given the old theme plus a BMW design and given the colour scheme, I utilised this similar layout whilst also combining it with aspects of more modern gradient logos with dropshadows."

                processB="I created a clean design for multiple sections of the software, keeping it simple with no bezels or embossing and making sure its easily accessible and usable whilst also keeping it within reason of an upgrade."

                processC="I also created a dynamic resting page with multiple gradients to help promote a cleaner and more modern creative look, with gradient bubbles blurred out to create distance between the sharper time and the background colours"

                Img={require("../../../assets/images/a11/hero.png")}
                
                secImg={require("../../../assets/images/a11/tablet0.png")}
                secImg2={require("../../../assets/images/a11/tablet1.png")}

                thirdImg={require("../../../assets/images/a11/tablet2.png")}
                thirdImg2={require("../../../assets/images/a11/tablet1.png")}
                thirdImg3={require("../../../assets/images/a11/tablet2.png")}

                nextName="TyreWatcher"
                nextRole="Project & Design Manager" 
                nextImage={require("../../../assets/images/tw/hero.png")}
                nextPage="projects/tyrewatcher"
            />
    )
}