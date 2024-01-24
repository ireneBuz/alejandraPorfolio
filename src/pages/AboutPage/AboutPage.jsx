import "./Aboutpage.css"
import Bio from "../../components/Bio/Bio"
import Skills from "../../components/Skills/Skills"
import AboutContact from "../../components/AboutContact/AboutContact"


const AboutPage = () => {

    return (
        <>
            <div id="bio">
                <Bio />
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="aboutContact">
                <AboutContact />
            </div>


        </>
    )
}

export default AboutPage
