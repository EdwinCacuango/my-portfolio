import Layout from "../../components/layout"
import TableContent from "../../components/tableContent"
import { GraphQLClient, gql } from "graphql-request"
import { format } from "date-fns"
import { es } from "date-fns/locale"

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
        shortDescription,
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
    const dateP = format(new Date(post.datePublish), `d MMM yyyy`, { locale: es })
    return (
        <Layout>
            <h1 className="hidden title sm:text-center mt-7 sm:mt-20 ">{post.title}</h1>
            <p className="hidden my-10">{post.shortDescription}</p>
            <div className="mt-12 my-4">
                <img src={post.coverPhoto.url} alt=""/>
            </div>
            <h1 className="title">{post.title}</h1>
            <p className="my-2">{post.shortDescription}</p>
            <div className="sm:text-center my-4 sm:my-8">
                <p className="text-base my-2"><span className="bg-rose-500 px-4 py-1.5 text-slate-100">{post.category[0].name}</span> • {dateP}</p>
            </div>
            <div className="content-import mt-2 border-t-2 pt-3"
                dangerouslySetInnerHTML={{ __html: post.content.html }}
            >
            </div>
        </Layout>
    )
}

//el innerHTML debe ir dentro del div, no como un hijo, sino como un atributo. Forma más rara pero funcionó