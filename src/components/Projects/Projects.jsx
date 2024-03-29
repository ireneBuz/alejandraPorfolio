import React, { useRef } from "react";
import ProjectCards from "../ProjectCards/ProjectCards"
import "./Projects.css"
import { projects } from "./../../utils/projects"


const Projects = () => {
    const projectsRef = useRef();

    return (
        <>
            <div className="projects" ref={projectsRef}>
                <div className="text">
                    <h2>Forging intuitive user <span>pathways</span></h2>
                </div>
                <div className="cards">
                    {
                        projects.map(({ image, secondimage }, idx) => {
                            return (
                                <ProjectCards key={idx} image={image} secondimage={secondimage} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Projects