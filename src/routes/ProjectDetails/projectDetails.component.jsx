import { Link, useParams } from "react-router-dom";
import { projects } from "../../data";

import '../ProjectDetails/projectDetails.styles.scss';

const ProjectDetails = () => {

    const {projectId} = useParams()
    const project = projects.find(proj => proj.id === projectId);

    return (
        <main>
            <div className="container pd-container">
                <div className="project-details">

                    <div className="flex flex-reverse align-center">

                        <div className="project-title">{project.title}</div>

                        <Link to="/projects" className="link">Back to projects</Link>

                    </div>

                    

                    <div className="header-section">

                        <div className="project-image">
                            <img src={project.featuredImage} alt="" className="featured" />
                        </div>

                    </div>

                    <div className="flex flex-reverse">

                        <div className="project-overview">
                            <div className="element-title">Overview</div>
                            <div className="element-desc">{project.overview}</div>
                        </div>

                        <div className="other-details">

                            <div className="element">
                                <div className="details-title">Client</div>
                                <div className="details-content">
                                    <span className="details-item">{project.client}</span>
                                </div>
                            </div>

                            <div className="element">
                                <div className="details-title">Role</div>
                                <div className="details-content">
                                    <span className="details-item">{project.role}</span>
                                </div>
                            </div>

                            <div className="element">
                                <div className="details-title">Service</div>
                                <div className="details-content">
                                    {
                                        project.services.map((service, index) => {
                                            return (
                                                <span key={service} className="details-item">{service}</span>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="project-overview">
                        <div className="element-title">Approach</div>
                        <div className="element-desc">{project.approach}</div>
                    </div>

                    <div className="project-overview">
                        <div className="element-title">Outcome</div>
                        <div className="element-desc">{project.outcome}</div>
                    </div>

                </div>

            </div>
        </main>
    )
}

export default ProjectDetails;