import "./Bio.css";

const Bio = () => {
    return (
        <>
            <div className="bio">
                <div className="foto">
                    <img src="/images/fotoBio.png" alt="foto bio" />
                </div>
                <div className="bioInfo">
                    <h2>
                        I'm Ale, a CRO & product designer
                        from <span>Madrid</span>
                    </h2>
                    <p>
                        ”As a product designer, I combine my UX/UI skills with effective marketing strategies to create user experiences that are not only visually appealing, but also generate measurable results. My focus on organization translates into creating clean and effective user experiences, where each element has a clear purpose. In addition, my solid background in Digital Marketing allows me to understand the importance of strategy and optimization in interface design”.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Bio;
