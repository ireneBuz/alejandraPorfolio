import React, { useRef } from "react";
import "./Contact.css"

const Contact = () => {
    const contactRef = useRef();
    return (
        <>
            <div className="contact" ref={contactRef}>
                <div className="title">
                    <img src="/images/line.jpg" />
                    <h2> Contact</h2>
                    <img src="/images/line.jpg" />
                </div>
                <h3>Ready to start a new project? Let's begin this exciting collaboration together</h3>
                <h4>You can reach me out at <span>alejandramamblonagomez@gmail.com</span></h4>
            </div>

        </>
    )
}
export default Contact

