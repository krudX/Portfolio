import '../ProjectCard/projectCard.styles.scss';

const ProjectCard = (props) => {

    const {title, featuredImage, services, type} = props;

    return (

        <div className="project-card" key={title}>
            <div className="project-image">
                <img className={type} src={featuredImage} alt={title} />
            </div>
            <div className="project-title">{title}</div>
            <div className="service-type">
                {
                    services.map((service, index) => {
                        return (
                            <span key={index} className="service-item">{service}</span>
                        )
                    })
                }
            </div>
        </div>
        
    )
}

export default ProjectCard;