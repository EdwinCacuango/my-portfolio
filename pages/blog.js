import { GraphQLClient, gql } from "graphql-request"
import BlogCard from "../components/BlogCard"
import Layout from '../components/Layout/layout'
import styles from "../styles/Blog.module.css"

const graphcms = new GraphQLClient("https://api-sa-east-1.graphcms.com/v2/cl468i5n71qhe01ywbvsa8io8/master")

const QUERY = gql`
  {
    posts {
      id, 
         title, 
         datePublish, 
         slug,
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
  return (
    <Layout>
      <h1>Últimos posts</h1>
      <div className={styles.gallery}>
        {
          posts.map(post => {
            return <BlogCard
              key={post.id}
              title={post.title}
              author={post.author.username}
              coverPhoto={post.coverPhoto.url}
              slug={post.slug}
              datePublished={post.datePublish}
            />
          })
        }
      </div>
    </Layout>
  )
}


