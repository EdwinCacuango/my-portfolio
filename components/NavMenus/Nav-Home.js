import Link from "next/link"
import { Button } from "../UI/Button"

export default function NavHome({ activeState }) {
    const { active, setActive } = activeState
    const activeMenuHandler = () => {
        setActive(prevState => !prevState)
    }
    return (
        <div>
            <nav className="hidden md:block">
                <ul className="nav-home">
                    <li><Link href="/#about">About me</Link></li>
                    <li><Link href="/#experience">Experiencia</Link></li>
                    <li><Link href="/#projects">Proyectos</Link></li>
                    <li><Link href="/#contact">Contáctame</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li>
                        <Button>
                            <a href="https://drive.google.com/file/d/1caQOH7CSlL-d3gYfRNUyNPYBWtpWAHks/view?usp=sharing" rel="noreferrer" target="_blank">Resume</a>
                        </Button>
                    </li>
                </ul>
            </nav>
            <button onClick={activeMenuHandler}
                className="w-12 h-12 flex flex-col justify-around md:hidden">
                <span className="block w-full h-1 bg-rose-500"></span>
                <span className="block w-full h-1 bg-rose-500"></span>
                <span className="block w-full h-1 bg-rose-500"></span>
            </button>
        </div>
    )
}