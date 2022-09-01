import { ProjectCard } from "../UI/ProjectCard"
import stocks from "../../public/thestocks.jpg"

export const Projects = () => {
    return (
        <section id="projects" className="section-home">
            <div>
                <h2 className="title-2 mt-32">0.3 Algunos de mis proyectos</h2>
                <div className="my-8 grid md:grid-cols-3 place-content-center gap-5">
                    <ProjectCard
                        titleProject="21DíasDeComplexivo"
                        image="/Screenshot_21DiasDeComplexivo.jpg"
                        description="Este proyecto se inició para compartir los apuntes y material biblográfico producido durante nuestro estudio para el examen final de la carrera de derecho. En su desarrollo se utilizó Next Js y Tawlind CSS. En materia de privacidad, utiliza una herramienta de seguimiento de actividad libre de cookies, alineado a la protección de datos personales según la legislación europea."
                        linkSite="https://21diasdecomplexivo.vercel.app/"
                    />
                    {/* <ProjectCard
                        titleProject="Proyecto legal"
                        image={sol}
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    />
                    <ProjectCard
                        titleProject="Proyecto no legal chico"
                        image={stocks}
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry." /> */}
                </div>
            </div>
        </section>
    )
}
