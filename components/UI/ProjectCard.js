import Image from "next/image"
import GitHub from "../../public/Imgs/github-logo.svg"
import site from "../../public/Imgs/enlace-externo.svg"
export const ProjectCard = ({ image, titleProject,description, linkSite, gitHubRepo }) => {
    return (
        <div className="card text-center">
            <Image src={image} alt="" />
            <div>
                <p className="text-enphasis">{titleProject}</p>
                <p className="text-left px-1 text-base">{description}</p>
            </div>
            <div className="mt-2 flex gap-1 items-center">
                <a className="icon-card" src={linkSite}><Image src={site} alt="Linkt to site" width={25} height={25}/></a>
                <a className="icon-card" src={gitHubRepo}><Image src={GitHub} alt="Link to GitHub repository" width={45} height={45}/></a>
            </div>
        </div>
    )
}
