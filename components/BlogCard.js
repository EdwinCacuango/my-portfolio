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
            <div className="mt-2 grid grid-rows-3 gap-2">
                <p className="text-xs my-2"><span className="bg-rose-500 px-3 py-1 rounded-xl text-slate-100">{category}</span> • {datePublished}</p>
                <div className="place-self-center">
                    <Link href={`/posts/${slug}`}><h3 className={`${titleStyle} hover:text-rose-400`}>{title}</h3></Link>
                    <p className="text-base">{description}</p>

                </div>
                <div className="text-sm mx-3 text-right text-rose-500 hover:text-rose-300">
                    <Link href={`/posts/${slug}`}><a>Seguir leyendo →</a></Link>
                </div>
            </div>
        </div>
    )
}
export default BlogCard