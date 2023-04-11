import { Fragment } from "react";
import '../FeaturedProjects/featuredProjects.styles.scss';
import ProjectCard from "../ProjectCard/projectCard.component";
import { projects } from "../../data";

const FeaturedProjects = () => {
    return (
        <section className="featured-projects" id="projects">

            <div className="section-name">
                <div className="index">1</div>
                <div className="subtext">Projects</div>
            </div>

            <div className="section-head">

                <div className="section-title">My Latest Work</div>

            </div>

            <div className="projects-grid">

                {
                    projects.map((project, index) => {

                        if (index < 4) {
                            return (
                                <div className="grid-item" key={project.title}>
                                    <ProjectCard key={project.id} id={project.id} title={project.title} featuredImage={project.featuredImage} services={project.services} type={project.type} />
                                </div>
                            )
                        }
                    })
                }

            </div>

            <div className="view-more">
                <a href="/projects" className="button button-fill">View All <img src="https://res.cloudinary.com/krude/image/upload/v1679767594/Portfolio/icon-arrow_right_whhinc.svg" alt="" /></a>
            </div>

        </section>
    )
}

export default FeaturedProjects;