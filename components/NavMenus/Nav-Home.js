import Link from "next/link"
import { Button } from "../UI/Button"

export default function NavHome(){
    return (
        <nav>
            <ul className="flex justify-content-center items-center gap-4">
                <li><a href="/#about">About me</a></li>
                <li><a href="/#experience">Experiencia</a></li>
                <li><a href="/#projects">Proyectos</a></li>
                <li><a href="/#contact">Contacto</a></li>
                <li><Link href="/blog"><a>Blog</a></Link></li>
                <li><Button><a href="https://drive.google.com/file/d/1caQOH7CSlL-d3gYfRNUyNPYBWtpWAHks/view?usp=sharing" rel="noreferrer" target="_blank">Resume</a></Button></li>
            </ul>
        </nav>
    )
}