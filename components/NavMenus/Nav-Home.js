import Link from "next/link"
import { Button } from "../UI/Button"

export default function NavHome(){
    return (
        <nav>
            <ul className="flex justify-content-center items-center gap-4">
                <li>About me</li>
                <li>Experiencia</li>
                <li>Proyectos</li>
                <li>Contacto</li>
                <li><Link href="/blog"><a>Blog</a></Link></li>
                <li><Button>Resume</Button></li>
            </ul>
        </nav>
    )
}