import Image from "next/image"
const Icons = ({ src, alt, url }) => {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            <Image src={src} alt={alt} width={48} height={48}/>
        </a>)
}

export default Icons