import Link from "next/link";
import { Button } from "../UI/Button";
import IconBar from "../IconBar";

export function NavBlog({ activeState }) {
  const { active, setActive } = activeState;
  const activeMenuHandler = () => {
    setActive((prevState) => !prevState);
  };
  return (
    <div>
      <nav className="hidden md:block">
        <ul className="nav">
          <li>
            <Link href="/#about">
            About me
            </Link>
          </li>
          <li>
            <Link href="/#projects">
             Proyectos
            </Link>
          </li>
          <li>
            <Link href="/#contact">
             Contáctame
            </Link>
          </li>

          <li>
            <Button stylesAdded="px-8">
              <Link href="/blog">
               Últimos posts
              </Link>
            </Button>
          </li>
          {/* <li><Link href="/exam">Complexivo</Link></li> */}
        </ul>
      </nav>
      <button
        onClick={activeMenuHandler}
        className="w-12 h-12 flex flex-col justify-around md:hidden"
      >
        <span className="block w-full h-1 bg-rose-500"></span>
        <span className="block w-full h-1 bg-rose-500"></span>
        <span className="block w-full h-1 bg-rose-500"></span>
      </button>
    </div>
  );
}

export function NavBlogMobile({ activeState }) {
  const { active, setActive } = activeState;
  const activeMenuHandler = () => {
    setActive((prevState) => !prevState);
  };
  return (
    <div className="mt-28 col-start-1 col-end-7 h-screen">
      <IconBar className="flex w-full h-12 justify-around mt-4" />
      <nav className="mt-4">
        <ul className="px-12">
          <li className="text-xl my-8 border-b-2 pb-3">
            <Link href="/" onClick={activeMenuHandler}>
              Inicio
            </Link>
          </li>
          <li className="text-xl my-8 border-b-2 pb-3">
            <Link href="/blog/#lasts-posts" onClick={activeMenuHandler}>
              Blog
            </Link>
          </li>
          <li className="text-xl my-8 border-b-2 pb-3">
            <Link href="/#about" onClick={activeMenuHandler}>
            Sobre mí
            </Link>
          </li>
          <li className="text-xl my-8 border-b-2 pb-3">
            <Link href="/#projects" onClick={activeMenuHandler}>
              Proyectos
            </Link>
          </li>
          <li className="text-xl my-8 border-b-2 pb-3">
            <Link href="/#contact" onClick={activeMenuHandler}>
            Contáctame
            </Link>
          </li>

          {/* <li className="text-2xl my-8 border-b-2 pb-3"><Link href="/exam">Complexivo</Link></li> */}
        </ul>
      </nav>
    </div>
  );
}
