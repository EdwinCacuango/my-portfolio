import Image from "next/image"
import Link from "next/link"
import {NavBlog} from "./NavMenus/Nav-Blog"
import NavHome from "./NavMenus/Nav-Home"
import webLogo from "../public/logo.svg"


export default function Header({ home, activeState }) {
    return (
        <header className="header w-full bg-white drop-shadow-md px-8 py-1 z-50 flex justify-between items-center gap-4 fixed overflow-hidden">
            <Link href="/">
                <a>
                    <Image src={webLogo} alt="website logo" width={80} height={80} />
                </a>
            </Link>
            {home
                ? <NavHome activeState={activeState}/>
                : <NavBlog activeState={activeState}/>
            }
        </header>


    )
}