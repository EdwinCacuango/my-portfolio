import Image from "next/image"
import GitHub from "../../public/Imgs/github-logo.svg"
import site from "../../public/Imgs/enlace-externo.svg"
export const ProjectCard = ({ image, titleProject, description, linkSite, gitHubRepo }) => {

    return (
        <div className="card rounded-lg text-center pt-6 px-4">
            <img src={image} alt={`${titleProject} homepage`} />
            <div className="my-4">
                <a className="text-2xl text-slate-500 md:text-enphasis hover:text-rose-500" href={linkSite}>{titleProject}</a>
                <p className="text-left px-2 md:px-3 pt-3 text-base">{description}</p>
            </div>
            <div className="m-4 self-end mt-2 flex gap-1 items-center">
                <a className="icon-card" href={linkSite} target="_blank" rel="noreferrer"><Image src={site} alt="Linkt to site" width={25} height={25} /></a>
                {
                    gitHubRepo && <a className="icon-card" href={gitHubRepo} target="_blak" rel="noreferrer" ><Image src={GitHub} alt="Link to GitHub repository" width={45} height={45} /></a>
                }
            </div>
        </div>
    )
}
