import Link from "next/link"
import Image from "next/image"

const BlogCard = ({ cardStyle, title, titleStyle, coverPhoto, datePublished, slug, category, description }) => {
    return (
        <div className={`card ${cardStyle}`}>
            <div className="relative">
                <Image
                    src={coverPhoto}
                    alt=""
                    layout="fill"
                />
            </div>
            <div>
                <p><span>{category}</span> • {datePublished}</p>
                <h2 className={titleStyle}>{title}</h2>
                <p>{description}</p>
                <Link href={`/posts/${slug}`}><a>Seguir leyendo →</a></Link>
            </div>
        </div>
    )
}
export default BlogCard