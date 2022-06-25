import Link from "next/link"
import { Button } from "../UI/Button"

export default function NavHome() {
    return (
        <nav>
            <ul className="nav">
                <li><Link href="/#about"><a>About me</a></Link></li>
                <li><Link href="/#experience"><a>Experiencia</a></Link></li>
                <li><Link href="/#projects"><a>Proyectos</a></Link></li>
                <li><Link href="/#contact"><a>Contacto</a></Link></li>
                <li><Link href="/blog"><a>Blog</a></Link></li>
                <li><Button><a href="https://drive.google.com/file/d/1caQOH7CSlL-d3gYfRNUyNPYBWtpWAHks/view?usp=sharing" rel="noreferrer" target="_blank">Resume</a></Button></li>
            </ul>
        </nav>
    )
}