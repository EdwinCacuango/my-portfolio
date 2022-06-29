import Icons from "./UI/Icons"
export const ShareBtns = ({ title, slug, category }) => {
  function parsedToURL(title, original, code) {
    const result = title.replace(original, code)
    return result
  }
  const medias = [
    {
      title: "LinkedIn",
      img: "/Imgs/linkedin-circled.svg",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=https://edwinc.dev/posts/${slug}`
    },
    {
      title: "Twitter",
      img: "/Imgs/twitter-circled.svg",
      url: `https://twitter.com/intent/tweet?text=${parsedToURL(title, " ", "%20")}
        &url=https%3A%2F%2Fedwinc.dev%2Fposts%2F${parsedToURL(slug, "-", "%2D")}&hashtags=${category}`
    }
  ]
  return (
    <div className="flex items-center gap-2">
      <p>Comparte en tus redes: </p>
      <ul className="flex my-2 justify-around">
        {medias.map(item => {
          return (<li key={item.title}>
            <Icons src={item.img} alt={`${item.title} logo`} url={item.url} />
          </li>)

        })}
      </ul>
    </div>
  )
}
