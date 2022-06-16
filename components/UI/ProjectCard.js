import Image from "next/image"
import GitHub from "../../public/Imgs/github-logo.svg"
import site from "../../public/Imgs/enlace-externo.svg"
export const ProjectCard = ({ image, titleProject,description, linkSite, gitHubRepo }) => {
    return (
        <div className="card text-center">
            <Image src={image} alt="" />
            <div>
                <p className="text-enphasis">{titleProject}</p>
                <p className="text-left px-2">{description}</p>
            </div>
            <div className="mt-4 flex gap-2 items-center">
                <a clasName="icon-card" src={linkSite}><Image src={site} alt="Linkt to site" /></a>
                <a clasName="icon-card" src={gitHubRepo}><Image src={GitHub} alt="Link to GitHub repository" /></a>
            </div>
        </div>
    )
}
