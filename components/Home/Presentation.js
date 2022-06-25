import Link from "next/link"
import Image from "next/image"
import { Button } from "../UI/Button"

export const Presentation = () => {
  return (
    <section className="section-home">
      <div className="flex">
        <div className="max-w-[50%]">
          <p className="details">Hola! Mi nombre es</p>
          <h1 className="title">Edwin Cacuango</h1>
          <p className="text-enphasis">Utilizo la tecnología para hacer más fácil el acceso a los servios legales</p>
          <p>Soy egresado de Derecho y también soy desarrollador frontend. Te puedo ayudar en dos tipos de servicios: legales y de desarrollo web. Si quieres mezclar un poco las cosas, también puedo ayudarte en asesoría legal relacionada con la web o podemos crear juntos una app legal.</p>
          <Button stylesAdded="my-3"><Link href="/#contact"><a>Escríbeme</a></Link></Button>
        </div>
        <div className="w-[50%] relative">
          <Image src="/coder-img.svg" alt="A person coding" layout="fill"/>
        </div>
      </div>

    </section>
  )
}
