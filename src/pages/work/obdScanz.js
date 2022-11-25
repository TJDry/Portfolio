import ProjectPage from "../projectTemplate";

export default function OBDScanz(){
    return(
            <ProjectPage
                color="linear-gradient(45deg,#ff1900,#380a05)"
                colorFlat="#ff1900"
                heading="OBDScanz"
                roles="Project Manager"

                overviewA="It's an all-in-one inclusive app that
                uses our OBD2 Scanner to connect your
                phone to the car via Bluetooth and manage the codes, test various aspects of your vehicle and help
                to maintain your car & keep it working at its full potential. OBD2 is the physical port where devices
                can connect to a car's ECU and provide insight into errors and statistics present in the ECU."
                
                overviewB="Our tools utilise the port and decode specific data through calculations named PIDs.As I was handed this
                project halfway, existing designs for the app were unable to be modified and thus having to stick
                with the current design style for the new screens I needed to create to finish the app's designs. "

                overviewC="It's a
                large-scale app with many APIs and calculations that need to be functional before release.The
                complexity of this app makes it hard to communicate and clarify functionality with the outsourced
                dev team responsible to produce the app."

                processA="It has been a long and hard year long project, with over 40 APK builds and adjustments."

                processB="From adding new features to refining performance and functionality, it becomes hard to tell if the project is making any haste towards production level."
                
                processC="The project needs to be able to run smoothly across all android versions making it hard for the developers i manage communications with to develop the app in a way that can run smoothly on all"                

                abrProject="obdsz"
                image1="hero"

                image2="1"

                image5="phone1"
                image6="phone2"
                image7="phone3"

                image8="phone4"

                nextName="Gremio"
                nextRole="UI/UX Designer" 
                nextImage= '/images/gr/1.png'
                nextPage="projects/gremio"
            />
    )
}