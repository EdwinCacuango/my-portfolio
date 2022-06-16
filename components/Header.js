import Image from "next/image"
import Link from "next/link"
import NavBlog from "./NavMenus/Nav-Blog"
import NavHome from "./NavMenus/Nav-Home"
import webLogo from "../public/logo.svg"


export default function Header({ home }) {
    return (
        <header className="w-full px-8 py-4 flex justify-between items-center gap-4">
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