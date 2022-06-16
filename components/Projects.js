import { ProjectCard } from "./UI/ProjectCard"
import girasoles from "../public/girasol.jpg"
import sol from "../public/puestadesol.jpeg"
import stocks from "../public/thestocks.jpg"

export const Projects = () => {
    return (
        <section id="projects" className="section-home">
            <h2 className="title-2">0.3 Algunos de mis proyectos</h2>
            <div  className="my-8 grid grid-cols-3 place-content-center gap-5">
                <ProjectCard 
                titleProject="Proyecto no legal grande" 
                image={girasoles}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
                <ProjectCard 
                titleProject="Proyecto legal" 
                image={sol}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
                <ProjectCard 
                titleProject="Proyecto no legal chico" 
                image={stocks}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."                />
            </div>
        </section>
    )
}
