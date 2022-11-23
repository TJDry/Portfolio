import ProjectPage from "../projectTemplate";

export default function Gremio(){
    return(
            <ProjectPage
                color="linear-gradient(45deg,#552586,#9969C7)"
                heading="Gremio"
                roles="UI Designer"
                hero={require("../../../assets/images/gr/hero.png")}

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
                
                Img={require("../../../assets/images/gr/hero.png")}
                
                secImg={require("../../../assets/images/gr/1.png")}
                secImg2={require("../../../assets/images/gr/2.png")}

                thirdImg={require("../../../assets/images/gr/Landinguwu-1.png")}
                thirdImg2={require("../../../assets/images/gr/Landinguwu-2.png")}
                thirdImg3={require("../../../assets/images/gr/Landing.png")}
                
                nextName="Battwatcher"
                nextRole="Project & Design Manager" 
                nextImage={require("../../../assets/images/bw/hero.png")}
                nextPage="projects/battwatcher"
            />
    )
}