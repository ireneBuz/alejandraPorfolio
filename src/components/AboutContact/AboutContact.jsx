import './AboutContact.css'

const AboutContact = () => {
    return (
        <div className="socialMediaInfo">
            <div className="infoTitle">
                <h3>Let´s get in touch. Feel free to contact me.</h3>
            </div>
            <div className="socialInfo">
                <div className="thanksTitle">
                    <h2>Thank you!</h2>
                    <p>See more on my social media pages</p>
                </div>
                <div className="socialItems">
                    <img src="/images/socialOne.png" alt="socialPhoto" />
                    <img src="/images/socialTwo.png" alt="socialPhoto" />
                    <img src="/images/cv.png" alt="socialPhoto" />
                </div>
                <div className="emailInfo">
                    <img src="/images/email.png" alt="emailPhoto" />
                    <p>alejandramamblonagomez@gmail.com</p>
                </div>
            </div>
        </div>

    )
}
export default AboutContact