import "./Skills.css"

const Skills = () => {
    return (
        <>
            <div className="personalSkills">
                <div className="skillsTitle">
                    <h2>Get to know me a little more</h2>
                    <img src="/images/Vector.jpg" alt="arrow photo" />
                </div>
                <div className="softBackground">
                    <div className="softTitle">
                        <h2>softs skills</h2>
                    </div>
                    <div className="softSkills">
                        <div className="columnSoft">
                            <p>Organised</p>
                            <img src="/images/line.jpg" />
                            <p>Resourceful</p>
                            <img src="/images/line.jpg" />
                            <p>Teamworker</p>
                            <img src="/images/line.jpg" />
                        </div>
                        <div className="columnSoft">
                            <p>Empathy</p>
                            <img src="/images/line.jpg" />
                            <p>Analytical</p>
                            <img src="/images/line.jpg" />
                            <p>Communication Skills</p>
                            <img src="/images/line.jpg" />
                        </div>
                    </div>
                </div>
                <div className="hardBackground">
                    <div className="hardTitle">
                        <h2>hard skills</h2>
                    </div>
                    <div className="hardSkills">
                        <div className="columnHard">
                            <p>UX Research</p>
                            <img src="/images/line.jpg" />
                            <p>Prototyping</p>
                            <img src="/images/line.jpg" />
                            <p>Project Management</p>
                            <img src="/images/line.jpg" />
                        </div>
                        <div className="columnHard">
                            <p>UI Design</p>
                            <img src="/images/line.jpg" />
                            <p>Product Strategy</p>
                            <img src="/images/line.jpg" />
                            <p> Marketing Strategy</p>
                            <img src="/images/line.jpg" />
                        </div>
                    </div>
                </div>
                <div className="toolsTitle">
                    <h2>tools i use </h2>
                    <img src="/images/blackLine.png" alt="black line" />
                </div>
                <div className="tools">
                    <div className="columnTools">
                        <p>Figma</p>
                        <p>Sketch</p>
                        <p>Adobe Illustrator</p>
                        <p>Notion</p>
                        <p>Jira</p>
                        <p>Google Anlytics & Google Ads</p>
                    </div>
                    <div className="columnTools">
                        <p>Visual Studio Code</p>
                        <p>HTML & CSS</p>
                        <p>Wordpress</p>
                        <p>Salesforce</p>
                    </div>
                </div>

            </div></>
    )
}
export default Skills