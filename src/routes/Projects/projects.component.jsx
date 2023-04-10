import ProjectCard from "../../components/ProjectCard/projectCard.component";
import { projects } from "../../data";

import '../Projects/projects.styles.scss';

const Projects = () => {
    return (
        <main className="projects">
            <div className="container">
                <div className="page-title">Projects</div>

                <div className="projects-grid">

                    {
                        projects.map((project) => {

                            return (
                                <div className="grid-item" key={project.title}>
                                    <ProjectCard key={project.id} id={project.id} title={project.title} featuredImage={project.featuredImage} services={project.services} type={project.type} />
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </main>
    )
}

export default Projects;