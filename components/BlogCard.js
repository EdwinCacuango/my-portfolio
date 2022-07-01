import Link from "next/link";
import Image from "next/image";

const BlogCard = ({
  cardStyle,
  title,
  titleStyle,
  coverPhoto,
  datePublished,
  slug,
  category,
  description,
}) => {
  return (
    <div className={`card ${cardStyle}`}>
      <div className="hidden md:block">
        <div className="relative h-full">
          <Image src={coverPhoto} alt="" layout="fill"/>
        </div>
      </div>
      <div className="px-2 md:py-2">
        <p className="text-xs my-4 md:my-1">
          <span className="bg-rose-500 px-3 py-1 rounded-xl text-slate-100">
            {category}
          </span>{" "}
          • {datePublished}
        </p>
        <div>
          <Link href={`/posts/${slug}`}>
            <h3 className={`${titleStyle} hover:text-rose-400`}>{title}</h3>
          </Link>
          <p className="text-xs">{description}</p>
        </div>
        <div className="text-sm mx-3 text-right text-rose-500 hover:text-rose-300">
          <Link href={`/posts/${slug}`}>
            <a>Seguir leyendo →</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
