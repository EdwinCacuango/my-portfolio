import Image from "next/image"
import Layout from "../components/Layout/layout"
import { Button } from "../components/UI/Button/Button"
import ExperienceTable from "../components/ExperienceTable/ExperienceTable"


export default function Home() {
  return (
    <Layout home>
        <section>
          <p>Hola! Mi nombre es</p>
          <h1>Edwin Cacuango</h1>
          <h2>Utilizo la tecnología para hacer más fácil el acceso a los servios legales</h2>
          <p>Soy egresado de Derecho (un casi abogado) y también soy desarrollador web frontend. Te puedo ayudar en dos tipos de servicios: legales y de desarrollo web. Si quieres mezclar un poco las cosas, también puedo ayudarte en asesoría legal relacionada con la web o podemos crear juntos una app legal.</p>
          <Button>Escríbeme!</Button>
        </section>
        <section>
          <div>
            <h2>0.1 About me</h2>
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
        <section>
          <h3>02. Experiencia</h3>
          <ExperienceTable />
        </section>

    </Layout>

  )
}
