import Link  from "next/link"
import Image from "next/image"
// import styles from "../styles/BlogCard.module.css"
 const BlogCard=({title, author, coverPhoto, datePublished, slug})=>{
    return(
        <div >
            <Link href={"/posts/"+slug}> 
                <img src={coverPhoto} alt="" />
            </Link>
        </div>
    )
}
export default BlogCard