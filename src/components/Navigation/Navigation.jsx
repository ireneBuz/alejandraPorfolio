import React, { useRef } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
    const projectsRef = useRef();

    const scrollToProjects = () => {
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="navi">
                <Link to={'/'} className='logo'>amg.</Link>
                <div className="menu">
                    <Link to={'/#projects'} onClick={scrollToProjects}>Projects</Link>
                    <Link to={'/AboutPage'}>About</Link>
                    <Link to={'/'}>Blog</Link>
                    <Link to={'/#contact'} onClick={scrollToContact}>Contact</Link>
                </div>
            </div>
        </>
    );
}

export default Navigation;
