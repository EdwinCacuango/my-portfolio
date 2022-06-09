import Link from "next/link"

export default function NavHome(){
    return (
        <nav>
            <ul>
                <li>About me</li>
                <li>Experiencia</li>
                <li>Proyectos</li>
                <li>Contacto</li>
                <li><Link href="/blog"><a>Blog</a></Link></li>
                <li><button>Resume</button></li>
            </ul>
        </nav>
    )
}