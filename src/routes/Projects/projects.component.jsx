import { useEffect } from "react";
import ProjectCard from "../../components/ProjectCard/projectCard.component";
import { projects } from "../../data";

import '../Projects/projects.styles.scss';

const Projects = () => {

    useEffect(() => {
        document.title = "Projects | pratham.design" ;  
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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