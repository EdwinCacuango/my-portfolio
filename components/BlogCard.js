import Link from "next/link"
import Image from "next/image"

const BlogCard = ({ title, datePublished, slug, category, description }) => {
    return (
        <div className="card">
            <Link href={`/posts/${slug}`}>
                <div>
                    {/* <div>
                        <Image
                            src={coverPhoto}
                            alt=""
                            layout="fill"
                        /> */}
                    {/* </div> */}
                    <div>
                        <p><span>{category}</span> • {datePublished}</p>
                        <h2>{title}</h2>
                        <p>{description}</p>                        
                    </div>
                </div>
            </Link>
        </div>

    )
}
export default BlogCard