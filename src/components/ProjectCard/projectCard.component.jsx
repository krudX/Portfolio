import {Link} from 'react-router-dom';
import '../ProjectCard/projectCard.styles.scss';

const ProjectCard = (props) => {

    const {id, title, featuredImage, services, type} = props;

    return (

        <Link to={`/projects/${id}`} className="project-card" key={id}>
            <div className="project-image">
                <img className={type} src={featuredImage} alt={title} />
                <div className="visit"><img src="https://res.cloudinary.com/krude/image/upload/v1679767594/Portfolio/icon-arrow_right_whhinc.svg" alt="" /></div>
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
        </Link>
        
    )
}

export default ProjectCard;