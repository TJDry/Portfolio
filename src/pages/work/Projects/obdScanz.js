import ProjectPagePhone from "../projectTemplatePhone";

export default function OBDScanz(){
    return(
            <ProjectPagePhone
                color="linear-gradient(45deg,#ff1900,#380a05)"
                heading="OBDScanz"
                roles="Project Manager"
                hero={require("../../../assets/images/obdsz/hero.png")}
                overviewA="It's an all-in-one inclusive app that
                uses our OBD2 Scanner to connect your
                phone to the car via Bluetooth and manage the codes, test various aspects of your vehicle and help
                to maintain your car & keep it working at its full potential. OBD2 is the physical port where devices
                can connect to a car's ECU and provide insight into errors and statistics present in the ECU. Our tools
                utilise the port and decode specific data through calculations named PIDs."
                
                overviewB="As I was handed this
                project halfway, existing designs for the app were unable to be modified and thus having to stick
                with the current design style for the new screens I needed to create to finish the app's designs. It's a
                large-scale app with many APIs and calculations that need to be functional before release. The
                complexity of this app makes it hard to communicate and clarify functionality with the outsourced
                dev team responsible to produce the app."


                processA="It has been a long and hard year long project, with over 40 APK builds and adjustments."

                processB="From adding new features to refining performance and functionality, it becomes hard to tell if the project is making any haste towards production level."
                
                processC="The project needs to be able to run smoothly across all android versions making it hard for the developers i manage communications with to develop the app in a way that can run smoothly on all"                
                Img={require("../../../assets/images/obdsz/hero.png")}
                
                secImg={require("../../../assets/images/obdsz/phone1.png")}
                secImg2={require("../../../assets/images/obdsz/phone2.png")}
                
                thirdImg={require("../../../assets/images/obdsz/phone3.png")}
                thirdImg2={require("../../../assets/images/obdsz/phone4.png")}
                thirdImg3={require("../../../assets/images/obdsz/phone2.png")}
                
                nextName="OBDScanz"
                nextRole="Project & Design Manager" 
                nextImage={require("../../../assets/images/gr/1.png")}
                nextPage="projects/gremio"
            />
    )
}