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
                your wheel tyre pressure sensors.
                From here you will be able to view
                and manage the temperature,
                pressure and status of your tyres
                and be notified if anything unusual
                like a puncture or overheat occurs"

                overviewB="Battery Watcher utilises our
                BattWatcher product to connect to
                your car battery and transmits
                data directly to your phone
                through a Bluetooth connection to
                this app where you can view the
                voltage and health of your battery,
                the consumption of power per
                second and run various tests such
                as the Cranking, Charging and
                Battery tests to make sure you get
                the most out of your battery."

                overviewC="Battery Watcher utilises our
                BattWatcher product to connect to
                your car battery and transmits
                data directly to your phone
                through a Bluetooth connection to
                this app where you can view the
                voltage and health of your battery,
                the consumption of power per
                second and run various tests such
                as the Cranking, Charging and
                Battery tests to make sure you get
                the most out of your battery."

                processA="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                
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


                processA="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                
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
                color="rgb(52,1,76)"
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

                processA="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                
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
                // color="rgb(95,0,0)"
                heading="BattWatcher"
                roles="Project & Design Manager"
                hero={require("../../assets/images/bw/hero.png")}

                overviewA="Battery Watcher utilises our
                BattWatcher product to connect to
                your car battery and transmits
                data directly to your phone
                through a Bluetooth connection to
                this app where you can view the
                voltage and health of your battery,
                the consumption of power per
                second and run various tests such
                as the Cranking, Charging and
                Battery tests to make sure you get
                the most out of your battery."

                processA="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
                // color="rgb(95,0,0)"
                heading="Android 11"
                roles="Project & Design Manager"
                hero={require("../../assets/images/a11/hero.png")}

                overviewA="Battery Watcher utilises our
                BattWatcher product to connect to
                your car battery and transmits
                data directly to your phone
                through a Bluetooth connection to
                this app where you can view the
                voltage and health of your battery,
                the consumption of power per
                second and run various tests such
                as the Cranking, Charging and
                Battery tests to make sure you get
                the most out of your battery."

                overviewB="Battery Watcher utilises our
                BattWatcher product to connect to
                your car battery and transmits
                data directly to your phone
                through a Bluetooth connection to
                this app where you can view the
                voltage and health of your battery,
                the consumption of power per
                second and run various tests such
                as the Cranking, Charging and
                Battery tests to make sure you get
                the most out of your battery."

                processA="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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