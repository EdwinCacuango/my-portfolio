import Link from "next/link"
import Image from "next/image"
import styles from "../styles/BlogCard.module.css"
const BlogCard = ({ title, coverPhoto, datePublished, slug, className }) => {
    return (
        <div className={className}>
            <Link href={`/posts/${slug}`}>
                <div className={styles.card}>
                    <div className={styles.cover}>
                        <img
                            src={coverPhoto}
                            alt=""
                        />
                    </div>
                    <div>
                        <h2>{title}</h2>
                        <p>{datePublished}</p>
                    </div>
                </div>
            </Link>
        </div>

    )
}
export default BlogCard