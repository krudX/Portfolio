import {useParams} from "react-router-dom"
import { projects } from "../../data"

import '../ProjectDetails/projectDetails.styles.scss';

const ProjectDetails = () => {

    const {projectId} = useParams()
    const project = projects.find(proj => proj.id === projectId);

    return (
        <main>
            <div className="container">
                <div className="project-details">

                    <div className="project-title">{project.title}</div>

                    <div className="project-image">
                        <img src={project.featuredImage} alt="" className="featured" />
                    </div>

                    <div className="header-section">

                        <div className="project-overview">
                            <div className="element-title">Client Overview</div>
                            <div className="element-desc">{project.companyOverview}</div>
                            <p>Objective: The objective of our work with the soft toys business was to create a modern and eye-catching logo design that would help them stand out in a crowded market. The logo needed to be simple, yet memorable, and convey the warmth and playful nature of their products.

Approach: We began our work by researching the soft toys industry and studying the client's existing branding materials and website. We then collaborated closely with the client to understand their vision and preferences, and to ensure that the final logo design would align with their business goals and values.

Outcome: The final logo design we created for the soft toys business features a playful and friendly animal character that embodies the joy and comfort that their products provide. The logo is colorful, but not overwhelming, and is versatile enough to work well across various marketing channels and product lines.

Conclusion: We are confident that our logo design will help the soft toys business attract and retain more customers, and build a stronger brand reputation in the competitive soft toys industry. It was a pleasure working with this client, and we look forward to future collaborations with them.</p>
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
                                                <span key={index} className="details-item">{service}</span>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </main>
    )
}

export default ProjectDetails;