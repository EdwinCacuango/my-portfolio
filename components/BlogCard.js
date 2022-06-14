import Link from "next/link"
import Image from "next/image"
import styles from "../styles/BlogCard.module.css"
const BlogCard = ({ title, coverPhoto, datePublished, slug, className, category, description }) => {
    return (
        <div className={className}>
            <Link href={`/posts/${slug}`}>
                <div className={styles.card}>
                    <div className={styles.cover}>
                        <Image
                            src={coverPhoto}
                            alt=""
                            layout="fill"
                        />
                    </div>
                    <div className={styles.details}>
                        <p><span className={styles.category}>{category}</span> • {datePublished}</p>
                        <h2>{title}</h2>
                        <p>{description}</p>                        
                    </div>
                </div>
            </Link>
        </div>

    )
}
export default BlogCard