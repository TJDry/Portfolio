import ProjectPage from "./projectTemplate";
import ProjectPagePhone from "./projectTemplatePhone";

export default function Tyrewatcher(){
    return(
            <ProjectPagePhone
                color="linear-gradient(45deg,#ee8e33,#f85e45)"
                heading="Tyrewatcher"
                roles="Project & Design Manager"
                hero={require("../../assets/images/tw/hero.png")}
                overviewA="Tyrewatcher is a mobile app used
                to maintain your tyres health,
                being provided with a dashboard
                directly connected via Bluetooth to
                your wheel tyre pressure sensors."

                overviewB="From here you will be able to view
                and manage the temperature,
                pressure and status of your tyres   
                and be notified if anything unusual
                like a puncture or overheat occurs"

                overviewC="The task was split into two categories, both a mobile app upgrade ontop of the existing one that I assisted in testing & publishing on IOS/Android and a new tablet version for our headunits so you can check your tyre status right from the cabin of your car."

                processA="In a similar fashion to my other projects, I was presented with an old version that wasn't very developed and made the decision to redesign it utilising the same branding. I also needed to adapt the design to tablet which was also a challenge given the sizing of the tablet."

                processB="I started off by grabbing the most notable features and identifying what should go where and also redefining the strong orange colour palette to something slightly more appealing and toned down, leading to accents of orange to red gradients appearing in small doses throughout the app"

                processC="I also researched the best methods to display tyre pressures and compared our potential app to competitors and tried to match or improve our features to make it a competitor in the market."

                conclusionA="Currently the tablet app is being developed however we're struggling with matching the bluetooth communication protocols of the base head unit to the tyre sensors so the project is process waiting on both the supplier and developers to resolve the issue."
                
                conclusionB="The New phone app however is currently on hold due to currently ongoing number of tasks and is awaiting a ready signal from my boss"

                Img={require("../../assets/images/tw/hero.png")}
                
                secImg={require("../../assets/images/tw/phone1.png")}
                secImg2={require("../../assets/images/tw/phone3.png")}

                thirdImg={require("../../assets/images/tw/tablet0.png")}
                thirdImg2={require("../../assets/images/tw/tablet2.png")}
                thirdImg3={require("../../assets/images/tw/tablet3.png")}

                nextName="OBDScanz"
                nextRole="Project & Design Manager" 
                nextImage={require("../../assets/images/obdsz/hero.png")}
                nextPage="projects/obdscanz"
            />
    )
}
export function OBDScanz(){
    return(
            <ProjectPagePhone
                color="linear-gradient(45deg,#ff1900,#380a05)"
                heading="OBDScanz"
                roles="Project Manager"
                hero={require("../../assets/images/obdsz/hero.png")}
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
                Img={require("../../assets/images/obdsz/hero.png")}
                
                secImg={require("../../assets/images/obdsz/phone1.png")}
                secImg2={require("../../assets/images/obdsz/phone2.png")}
                
                thirdImg={require("../../assets/images/obdsz/phone3.png")}
                thirdImg2={require("../../assets/images/obdsz/phone4.png")}
                thirdImg3={require("../../assets/images/obdsz/phone2.png")}
                
                nextName="OBDScanz"
                nextRole="Project & Design Manager" 
                nextImage={require("../../assets/images/gr/1.png")}
                nextPage="projects/gremio"
            />
    )
}
export function Gremio(){
    return(
            <ProjectPage
                color="linear-gradient(45deg,#552586,#9969C7)"
                heading="Gremio"
                roles="UI Designer"
                hero={require("../../assets/images/gr/hero.png")}

                overviewA="Gremio, the spanish word for Guild, is a fictional
                company based in Perth, Western Australia, looking to bring the sparse design
                community together to collaborate on
                the projects they choose. 
                It's site needs to be able to accomodate for every level of designer from junior
                ux designers to design managers and
                directors."
                
                overviewB="The goal of Gremio is to help
                designers freelance and work with many
                teams potentially internationally as they
                work together and connect with eachother and refine their skills as a designer."
                
                overviewC="They are looking for experienced designers and developers to create their site and
                help open up new work prospects for designers of all trades. Their true goal is the
                unity of designers across the globe, from
                fashion designers to senior developers
                and managers."

                processA=""
                
                Img={require("../../assets/images/gr/hero.png")}
                
                secImg={require("../../assets/images/gr/1.png")}
                secImg2={require("../../assets/images/gr/2.png")}

                thirdImg={require("../../assets/images/gr/Landinguwu-1.png")}
                thirdImg2={require("../../assets/images/gr/Landinguwu-2.png")}
                thirdImg3={require("../../assets/images/gr/Landing.png")}
                
                nextName="Battwatcher"
                nextRole="Project & Design Manager" 
                nextImage={require("../../assets/images/bw/hero.png")}
                nextPage="projects/battwatcher"
            />
    )
}
export function BattWatcher(){
    return(
            <ProjectPagePhone
                color="linear-gradient(45deg,#DC1C13,#F1959B)"
                heading="BattWatcher"
                roles="Project & Design Manager"
                hero={require("../../assets/images/bw/hero.png")}

                overviewA="Battery Watcher utilises our
                BattWatcher product to connect to
                your car battery and transmits
                data directly to your phone
                through a Bluetooth connection to
                this app."

                overviewB="You can view the
                voltage and health of your battery,
                the consumption of power per
                second and run various tests such
                as the Cranking, Charging and
                Battery tests to make sure you get
                the most out of your battery."

                overviewC="The app utilises BLE technology to hold up to 4 devices at the same time.
                It requires a full scale app with all tests, results and report creation as this is an industry
                standard application usable by the public"

                processA="To start this project I was presented with an underdeveloped version of the app and the inspiration behind it.
                From here I researched similar apps and created a list of necessary features that the app should include to be successful."

                processB="I then went on to do design & colour palette research, with the original colour palette being shown as RGB green and red.
                I researched popular trends and display types for graphs, navigations and data presentation and created a first mockup of the app."

                processC="From here I utilised Figma to create a fully mocked up prototype after receiving consistent feedback from peers and improving the design of the app to the point where it has 3 new versions that are refined each time."

                conclusionA="Once the app design was mostly finalised, I was tasked to find a suitable development team to develop the app. So I began the interview process via upwork and filtered through the many applicants for the project and ended up interviewing 4 development teams."
                conclusionB="From those 4 teams, we tested one, who never responded and thus we re-interviewed a couple and are waiting for project approval from my boss for the project to go ahead as we received the communication medium for the BLE device."
                conclusionC="Since those interviews I have been slowly improving the app's UI integrating a better navigation and sizings both for button and text and refining the BattWatcher brand."

                Img={require("../../assets/images/bw/hero.png")}
                
                secImg={require("../../assets/images/bw/phone2.png")}
                secImg2={require("../../assets/images/bw/phone1.png")}

                thirdImg={require("../../assets/images/bw/phone5.png")}
                thirdImg2={require("../../assets/images/bw/phone3.png")}
                thirdImg3={require("../../assets/images/bw/phone4.png")}

                nextName="TyreWatcher"
                nextRole="Project & Design Manager" 
                nextImage={require("../../assets/images/tw/hero.png")}
                nextPage="projects/tyrewatcher"
            />
    )
}
export function Android11(){
    return(
            <ProjectPage
                color="linear-gradient(45deg,#8B0001,#C34632)"
                heading="Android 11"
                roles="Project & Design Manager"
                hero={require("../../assets/images/a11/hero.png")}

                overviewA="VHEDIA currently utilises Android 10 grid-layout to create their theme for their products, I also created a BMW X-Series display aswell to suite wider displays."

                overviewB="I was tasked with enhancing this theme for our upgrade to Android 11, where we can start refining the widget system and developing the theme out further with custom app logos and system design beyond the load screen"

                overviewC="Although this wont be possible for a period of time, we have started to formally implement it partially as a theme and are waiting on the suppliers to get back to us with the new theme."

                processA="For this theme I was given the old theme plus a BMW design and given the colour scheme, I utilised this similar layout whilst also combining it with aspects of more modern gradient logos with dropshadows."

                processB="I created a clean design for multiple sections of the software, keeping it simple with no bezels or embossing and making sure its easily accessible and usable whilst also keeping it within reason of an upgrade."

                processC="I also created a dynamic resting page with multiple gradients to help promote a cleaner and more modern creative look, with gradient bubbles blurred out to create distance between the sharper time and the background colours"

                Img={require("../../assets/images/a11/hero.png")}
                
                secImg={require("../../assets/images/a11/tablet0.png")}
                secImg2={require("../../assets/images/a11/tablet1.png")}

                thirdImg={require("../../assets/images/a11/tablet2.png")}
                thirdImg2={require("../../assets/images/a11/tablet1.png")}
                thirdImg3={require("../../assets/images/a11/tablet2.png")}

                nextName="TyreWatcher"
                nextRole="Project & Design Manager" 
                nextImage={require("../../assets/images/tw/hero.png")}
                nextPage="projects/tyrewatcher"
            />
    )
}