import { GraphQLClient, gql } from "graphql-request"

const graphcms = new GraphQLClient("https://api-sa-east-1.graphcms.com/v2/cl468i5n71qhe01ywbvsa8io8/master")

const QUERY = gql`
    query Post($slug: String!){
        post(where:{slug:$slug}){
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
export async function getStaticProps({params}) {
    const slug=params.slug
    const data = await graphcms.request(QUERY, {slug})
    const post=data.post
    return {
        props: {
            post
        },
        revalidate: 10,
    }
}
export default function BlogPost({post}) {
    return(
        <main>
            <img src={post.coverPhoto.url} alt=""/>
            <h1>{post.title}</h1>
        </main>
    )
}