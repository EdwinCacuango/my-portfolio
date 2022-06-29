import Icons from "./UI/Icons"
import GithubLogo from "../public/Imgs/github-logo.svg"
import TwitterLogo from "../public/Imgs/twitter-circled.svg"
import MailLogo from "../public/Imgs/mail-Icon.svg"
import LinkedInLogo from "../public/Imgs/linkedin-circled.svg"
const IconBar = ({className}) => {
    const socialMedia = [
        {
            title: "LinkedIn",
            img: LinkedInLogo,
            url: "https://www.linkedin.com/in/edwin-cacuango-cahue%C3%B1as-b95b991b6/"
        },
        {
            title: "Email",
            img: MailLogo,
            url: "mailto:edwin.fcacuango@gmail.com"
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
    return (<ul className={className}>
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