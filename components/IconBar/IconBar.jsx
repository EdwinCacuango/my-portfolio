import Icons from "../UI/Icons/Icons"
import "./_IconBar.scss"
import GithubLogo from "./Imgs/github-logo.svg"
import TwitterLogo from "./Imgs/twitter-circled.svg"
import MailLogo from "./Imgs/mail-Icon.svg"
import LinkedInLogo from "./Imgs/linkedin-circled.svg"
const IconBar = () => {
    const socialMedia = [
        {
            title: "LinkedIn",
            img: LinkedInLogo,
            url: "https://www.linkedin.com/in/edwin-cacuango-cahue%C3%B1as-b95b991b6/"
        },
        {
            title: "Email",
            img: MailLogo,
            url: ""
        },
        {
            title: "Twitter",
            img: TwitterLogo,
            url: "https://twitter.com/edwincacuango"
        },
        {
            title: "GitHub",
            img:GithubLogo,
            url:"https://github.com/EdwinCacuango" 
        }           
    ]
    return (<ul className="icon-bar">
        {socialMedia.map(item => {
            return (
                <li key={item.title}>
                    <Icons src={item.img} alt={`${item.title} logo`} url={item.url} />
                </li>
            )
        })}
    </ul>)
}

export default IconBar