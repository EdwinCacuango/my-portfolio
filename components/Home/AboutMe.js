import Image from "next/image"
export const AboutMe = () => {
    return (
        <section className="section-home" id="about">
            <div>
                <h2 className="title-2 mt-32">0.1 Sobre mí</h2>
                <div className="flex gap-6">
                    {/* Description */}
                    <div className="p-2 text-justify max-w-[50%]">
                        <p> Hola¡ Mi nombre es Edwin. Mi interés en el mundo del desarrollo empezó allá por el 2020 cuando me involucré en el uso de herramientas web y control ciudadano. En este poco tiempo he descubierto todas las ventajas y oportunidades que suponen la fusión de la tecnología y el derecho y estoy realmente entusiasmado de poder colaborar en la creación y distribución de dichas soluciones digitales.</p>
                        <p className="my-2">Actualmente sigo estudiando para convertirme en un experto en desarrollo web, datos personales y ciberseguridad. Adicionalmente, durante este tiempo también he sido miembro de orgnizaciones de innovación legal, legaltech y propiedad intelectual.</p>
                        {/* Habilidades */}
                        <div>
                            <p>Estas son algunas de las tecnologías en con las que he trabajado recientemente:</p>
                            <ul className="grid grid-cols-2 m-3 ul-about">
                                <li>Semantic HTML y CSS</li>
                                <li>Boostrap y Tailwind CSS</li>
                                <li>Javascript</li>
                                <li>React JS</li>
                                <li>Next JS</li>
                                <li>Git y GitHub</li>
                            </ul>
                        </div>
                    </div>
                    <div >
                        <div className="relative leading-none">
                            <Image
                                src="/fotoPerfil.jpeg"
                                alt="Edwin Cacuango profile picture"
                                width={400}
                                height={313.75}
                                priority
                            />
                            <div className="layer"></div>
                        </div>

                    </div>
                </div>
            </div>

        </section >
    )
}
