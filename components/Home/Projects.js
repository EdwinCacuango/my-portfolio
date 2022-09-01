import { ProjectCard } from "../UI/ProjectCard"
import stocks from "../../public/thestocks.jpg"

export const Projects = () => {
    return (
        <section id="projects" className="section-home">
            <div>
                <h2 className="title-2 mt-32">0.3 Algunos de mis proyectos</h2>
                <div className="my-8 grid md:w-[90%] md:grid-cols-2 justify-items-center content-center md:gap-10">
                    <ProjectCard
                        titleProject="21DíasDeComplexivo"
                        image="/Screenshot_21DiasDeComplexivo.jpg"
                        description="Este proyecto se inició para compartir los apuntes y material biblográfico producido durante nuestro estudio para el examen final de la carrera de derecho. En su desarrollo se utilizó Next Js y Tailwind CSS. En materia de privacidad, utiliza una herramienta de seguimiento de actividad libre de cookies, alineado a la protección de datos personales según la legislación europea."
                        linkSite="https://21diasdecomplexivo.vercel.app/"
                    />
                    <ProjectCard
                        titleProject="Ecommerce page"
                        image="/Screenshot_EcommerceApp.jpg"
                        description="Esta página basada en la descripción de un producto fue construida usando React y Vite. Incluye un botón de compra, visualización de productos agregados al carrito y una galería para varias imágenes del producto. Esta app puede adaptarse para obtener datos de una API y renderizarlos de manera dinámica en una página propia. Disponible solo versión de escritorio*."
                        linkSite="https://ecommerce-landing.vercel.app/"
                        gitHubRepo="https://github.com/EdwinCacuango/ecommerce-landing"
                    />

                </div>
            </div>
        </section>
    )
}
