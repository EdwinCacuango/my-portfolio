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
            <div className="mt-2">
                <p className="text-xs my-2"><span className="bg-rose-500 px-3 py-1 rounded-xl text-slate-100">{category}</span> • {datePublished}</p>
                <h2 className={titleStyle}>{title}</h2>
                <p className="text-xs">{description}</p>
                <div className="text-sm text-right">
                    <Link href={`/posts/${slug}`}><a>Seguir leyendo →</a></Link>
                </div>
            </div>
        </div>
    )
}
export default BlogCard