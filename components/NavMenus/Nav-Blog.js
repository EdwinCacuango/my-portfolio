import Link from "next/link"
import styles from "../../styles/Nav.module.css"

export default function NavBlog() {
    return (
        <nav className={styles.nav}>
            
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>


                    <li><Link href="/#about"><a>About</a></Link></li>


                    <li><Link href="/#contact"><a>Contact me</a></Link></li>

                    <li><Link href="/blog"><a>Blog</a></Link></li>

                </ul>

            </nav>
            )
}