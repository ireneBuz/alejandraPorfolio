import "./ProjectCards.css"

const ProjectCards = ({ image, secondimage }) => {

    return (
        <>
            <div className="card">

                <img src={image} alt="project image" className="firstImage" />


                <img src={secondimage} alt="project hover image" className="hoverImage" />

            </div>
        </>
    )
}
export default ProjectCards