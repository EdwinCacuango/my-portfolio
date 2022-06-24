import { ProjectCard } from "../UI/ProjectCard"
import girasoles from "../../public/girasol.jpg"
import sol from "../../public/puestadesol.jpeg"
import stocks from "../../public/thestocks.jpg"

export const Projects = () => {
    return (
        <section id="projects" className="section-home">
            <div>
                <h2 className="title-2 mt-52">0.3 Algunos de mis proyectos</h2>
                <div className="my-8 grid grid-cols-3 place-content-center gap-5">
                    <ProjectCard
                        titleProject="Proyecto no legal grande"
                        image={girasoles}
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    />
                    <ProjectCard
                        titleProject="Proyecto legal"
                        image={sol}
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    />
                    <ProjectCard
                        titleProject="Proyecto no legal chico"
                        image={stocks}
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                </div>
            </div>
        </section>
    )
}
