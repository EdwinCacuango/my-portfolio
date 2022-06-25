import Image from "next/image"
import Link from "next/link"
import NavBlog from "./NavMenus/Nav-Blog"
import NavHome from "./NavMenus/Nav-Home"
import webLogo from "../public/logo.svg"


export default function Header({ home }) {
    return (
        <header className="header w-full bg-slate-50 px-8 z-50 flex justify-between items-center gap-4 shadow-md fixed overflow-hidden">
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