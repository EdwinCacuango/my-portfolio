import Link from "next/link"

export default function NavBlog() {
    return (
        <nav>
            <ul className="nav">
                <li><Link href="/#about"><a>About me</a></Link></li>
                <li><Link href="/#contact"><a>Contáctame</a></Link></li>
                <li><Link href="/blog"><a>Blog</a></Link></li>
                <li><Link href="/exam">Complexivo</Link></li>
            </ul>
        </nav>
    )
}