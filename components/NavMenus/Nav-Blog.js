import Link from "next/link"

export default function NavBlog() {
    return (
        <nav>
            
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>


                    <li><Link href="/#about"><a>About</a></Link></li>


                    <li><Link href="/#contact"><a>Contact me</a></Link></li>

                    <li><Link href="/blog"><a>Blog</a></Link></li>

                </ul>

            </nav>
            )
}