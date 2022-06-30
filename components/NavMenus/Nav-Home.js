import Link from "next/link"
import { Button } from "../UI/Button"

export default function NavHome({activeState}) {
    const { active, setActive } = activeState
    const activeMenuHandler = () => {
        setActive(prevState => !prevState)
    }
    return (
        <div>
            <nav className="hidden md:block">
                <ul className="nav-home">
                    <li><Link href="/#about"><a>About me</a></Link></li>
                    <li><Link href="/#experience"><a>Experiencia</a></Link></li>
                    <li><Link href="/#projects"><a>Proyectos</a></Link></li>
                    <li><Link href="/#contact"><a>Contáctame</a></Link></li>
                    <li><Link href="/blog"><a>Blog</a></Link></li>
                    <li className="nav-outeffect">
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