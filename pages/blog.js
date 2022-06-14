import { GraphQLClient, gql } from "graphql-request"
import BlogCard from "../components/BlogCard"
import Layout from '../components/Layout/layout'
import { format } from "date-fns"
import { es } from "date-fns/esm/locale"
import styles from "../styles/Blog.module.css"

const graphcms = new GraphQLClient("https://api-sa-east-1.graphcms.com/v2/cl468i5n71qhe01ywbvsa8io8/master")

const QUERY = gql`
  {
    posts {
      id, 
      title, 
      datePublish, 
      slug,
      shortDescription
      category {
        ... on Category {
          name
        }
      }
      content{
         html
       }
      author{
         username,
         avatar{
             url
         }

      }
      coverPhoto{
         url
       }
      
     }
  }
`
export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY)
  return {
    props: {
      posts
    },
    revalidate: 10,
  }
}

export default function Blog({ posts }) {
  const featured = posts[0]
  const relevant1 = posts[1]
  const relevant2 = posts[2]
  const notFeatured = posts.slice(3)

  //DATES FOR STYLED CARDS
  const featuredDate = format(new Date(featured.datePublish), `d MMM yyyy`, { locale: es })
  const relevant1Date = format(new Date(relevant1.datePublish), `d MMM yyyy`, { locale: es })
  const relevant2Date = format(new Date(relevant2.datePublish), `d MMM yyyy`, { locale: es })
  return (
    <Layout>
      <h1>Últimos posts</h1>
      <div className={styles.gallery}>
        <BlogCard
          key={featured.id}
          title={featured.title}
          author={featured.author.username}
          coverPhoto={featured.coverPhoto.url}
          slug={featured.slug}
          datePublished={featuredDate}
          category={featured.category.name}
          className="featured"
        />
        <BlogCard
          key={relevant1.id}
          title={relevant1.title}
          author={relevant1.author.username}
          coverPhoto={relevant1.coverPhoto.url}
          slug={relevant1.slug}
          datePublished={relevant1Date}
          category={relevant1.category.name}
          className="relevant1"
        />
        <BlogCard
          key={relevant2.id}
          title={relevant2.title}
          author={relevant2.author.username}
          coverPhoto={relevant2.coverPhoto.url}
          slug={relevant2.slug}
          datePublished={relevant2Date}
          className="relevant2"
        />
        {
          notFeatured.map(post => {
            const dateP = format(new Date(post.datePublish), `d MMM yyyy`, { locale: es })
            return <BlogCard
              key={post.id}
              title={post.title}
              author={post.author.username}
              coverPhoto={post.coverPhoto.url}
              slug={post.slug}
              datePublished={dateP}
              category={post.category[0].name}
            // description={post.shortDescription}
            />
          })
        }
      </div>
    </Layout>
  )
}

