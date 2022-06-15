import Image from "next/image"
import Layout from "../components/layout"
import ExperienceTable from "../components/ExperienceTable/ExperienceTable"
import { Presentation } from "../components/Presentation"


export default function Home() {
  return (
    <Layout home>
        <Presentation></Presentation>
        <section className="section-home">
          <div>
            <h2 className="title-2">0.1 About me</h2>
            <div>
              <p> Hola¡ Mi nombre es Edwin. Mi interés en el mundo del desarrollo empezó allá por el 2020 cuando me involucré en el uso de herramientas web y control ciudadano. En este poco tiempo he descubierto todas las ventajas y oportunidades que suponen la fusión de la tecnología y el derecho y estoy realmente entusiasmado de poder colaborar en la creación y distribución de dichas soluciones digitales.</p>
              <p>Actualmente sigo estudiando para convertirme en un experto en desarrollo web, datos personales y ciberseguridad. Adicionalmente, durante este tiempo también he sido miembro de orgnizaciones de innovación legal, legaltech y propiedad intelectual.</p>
              <div>
                <p>Estas son algunas de las tecnologías en con las que he trabajado recientemente:</p>
                <ul>
                  <li>Semantic HTML y CSS</li>
                  <li>Boostrap y Tailwind CSS</li>
                  <li>Javascript</li>
                  <li>React JS</li>
                  <li>Next JS</li>
                  <li>Git y GitHub</li>
                </ul>
              </div>
            </div>
          </div>
          <div >
            <Image
              src="/fotoPerfil.jpg"
              alt="Edwin Cacuango profile picture"
              width={800}
              height={627.5}
            />
          </div>
        </section>
        <section className="section-home">
          <h2 className="title-2">02. Experiencia</h2>
          <ExperienceTable />
        </section>

    </Layout>

  )
}
