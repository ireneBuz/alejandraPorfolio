import Hero from "../../components/Hero/Hero"
import Projects from "../../components/Projects/Projects"
import Contact from "../../components/Contact/Contact"

import "./HomePage.css"



const HomePage = () => {
    return (
        <>
            <div id="hero">
                <Hero />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </>
    )
}
export default HomePage