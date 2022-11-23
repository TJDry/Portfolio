import ProjectPagePhone from "../projectTemplatePhone";

export default function BattWatcher(){
    return(
            <ProjectPagePhone
                color="linear-gradient(45deg,#DC1C13,#F1959B)"
                heading="BattWatcher"
                roles="Project & Design Manager"
                hero={require("../../../assets/images/bw/hero.png")}

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

                Img={require("../../../assets/images/bw/hero.png")}
                
                secImg={require("../../../assets/images/bw/phone2.png")}
                secImg2={require("../../../assets/images/bw/phone1.png")}

                thirdImg={require("../../../assets/images/bw/phone5.png")}
                thirdImg2={require("../../../assets/images/bw/phone3.png")}
                thirdImg3={require("../../../assets/images/bw/phone4.png")}

                nextName="TyreWatcher"
                nextRole="Project & Design Manager" 
                nextImage={require("../../../assets/images/tw/hero.png")}
                nextPage="projects/tyrewatcher"
            />
    )
}