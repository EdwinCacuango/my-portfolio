import Image from "next/image"
import Link from "next/link"
import NavBlog from "../NavMenus/Nav-Blog"
import NavHome from "../NavMenus/Nav-Home"
import webLogo from "../../public/logo.svg"
import styles from "../../styles/Header.module.css"

export default function Header({ home }) {
    return (
        <header className={styles.header}>

            <Link href="/">
                <a>
                    <Image src={webLogo} alt="website logo" width={80} height={80} />
                </a>
            </Link>
            {home
                ? <NavHome />
                : <NavBlog />
            }
        </header>


    )
}