import { Fragment } from "react";
import '../FeaturedProjects/featured-projects.styles.scss';
import ProjectCard from "../ProjectCard/project-card.component";
import { projects } from "../../data";

const FeaturedProjects = () => {
    return (
        <Fragment>
            <section className="featured-projects">

                <div className="section-name">
                    <div className="index">1</div>
                    <div className="subtext">Projects</div>
                </div>

                <div className="section-head">

                    <div className="section-title">My Latest Work</div>

                </div>

                <div className="projects-grid">

                    {
                        projects.map(project => {
                            return (
                                <div className="grid-item">
                                    <ProjectCard key={project.title} title={project.title} featuredImage={project.featuredImage} services={project.services} type={project.type} />
                                </div>
                            )
                        })
                    }

                </div>

                <div className="view-more">
                    <a href="#" className="button button-fill">View All <img src="https://res.cloudinary.com/krude/image/upload/v1679767594/Portfolio/icon-arrow_right_whhinc.svg" alt="" /></a>
                </div>

            </section>
        </Fragment>
    )
}

export default FeaturedProjects;