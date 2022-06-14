import Image from "next/image"
import Layout from "../../components/Layout/layout"
import { GraphQLClient, gql } from "graphql-request"
import {format} from "date-fns"
import {es} from "date-fns/esm/locale"
import styles from "../../styles/slug.module.css"

const graphcms = new GraphQLClient("https://api-sa-east-1.graphcms.com/v2/cl468i5n71qhe01ywbvsa8io8/master")

const QUERY = gql`
    query Post($slug: String!){
        post(where:{slug:$slug}){
        id, 
        title, 
        datePublish, 
        category {
            ... on Category {
              name
            }
          }
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
        id,
         url
       }
        }
    }
  
`
const SLUGLIST = gql`
    {
        posts{
            slug
        }
    }
`
export async function getStaticPaths() {
    const { posts } = await graphcms.request(SLUGLIST)
    return {
        paths: posts.map(post => ({ params: { slug: post.slug } })),
        fallback: false
    }
}
export async function getStaticProps({ params }) {
    const slug = params.slug
    const data = await graphcms.request(QUERY, { slug })
    const post = data.post
    return {
        props: {
            post
        },
        revalidate: 10,
    }
}
export default function BlogPost({ post }) {
    const dateP=format (new Date(post.datePublish), `d MMM yyyy`, {locale:es})
    return (
        <Layout>
            <div className={styles.info}>
                <p>{post.category[0].name} • {dateP}</p>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.slug}>
                <img src={post.coverPhoto.url} alt="" />
            </div>
            <div
                dangerouslySetInnerHTML={{ __html: post.content.html }}
                className={styles.content}
            >
            </div>
            <div className={styles.author}>
                <div className={styles.avatar}>
                    <Image
                        src={post.author.avatar.url}
                        alt={`${post.author.username} picture`}
                        layout="fill"
                        className={styles.profile}
                    />
                </div>
                <div>
                    Creado por:
                    <p>{post.author.username}</p>
                </div>

            </div>
        </Layout>
    )
}

//el innerHTML debe ir dentro del div, no como un hijo, sino como un atributo. Forma más rara pero funcionó