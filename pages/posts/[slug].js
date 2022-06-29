import Layout from "../../components/layout"
import { ShareBtns } from "../../components/ShareBtns"
import { GraphQLClient, gql } from "graphql-request"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import IconBar from "../../components/IconBar"
import BuyMeACoffe from "../../components/BuyMeACoffe"

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
            {/* Encabezado para laptos en adelante */}
            <div className="hidden lg:block">
                <h1 className="title lg:mt-20 ">{post.title}</h1>
                <p className="my-4 text-2xl">{post.shortDescription}</p>
                {/* Author, category, etc */}
                <div className="my-2 py-4 gap-16 flex items-center">
                    <p className="text-xl">
                        <span className="bg-rose-500 px-4 py-1.5 text-slate-100">
                            {post.category[0].name}
                        </span> • {dateP}
                    </p>
                    <div className="flex gap-2 items-center">
                        <p className="text-xl">Autor: {post.author.username}</p>
                        <div className="w-12 ">
                            <img src={post.author.avatar.url}
                                alt="Foto de perfil"
                                className="object-contain rounded-full max-w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16 lg:mt-8 flex justify-center w-full">
                <img src={post.coverPhoto.url} alt="" className="w-[100%] lg:w-[90%]" />
            </div>
            {/* Encabezado para movil */}
            < div className="lg:hidden">
                <h1 className="title mt-4">{post.title}</h1>
                <p className="my-2">{post.shortDescription}</p>
                {/* Author, date, category */}
                <p className="text-base">
                    <span className="text-rose-500 italic">
                        Autor:
                    </span>
                    {post.author.username}
                </p>
                <p className="my-6">
                    <span className="bg-rose-500 px-4 py-1.5 text-slate-100">
                        {post.category[0].name}
                    </span> • {dateP}
                </p>
            </div>
            <div className="content-import mt-2 border-t-2 pt-3"
                dangerouslySetInnerHTML={{ __html: post.content.html }}
            >
            </div>
            {/* Post end */}
            <div className="border-t-2 mt-8 md:mt-16 pt-3 md:px-16">
                <p className="md:text-xl">Gracias por llegar al final del post¡ No olvides volver, cada semana tenemos nuevo contenido.</p>
                <div className="md:my-4 md:flex justify-between items-center gap-4">
                    <ShareBtns title={post.title} slug={post.slug} category={post.category[0].name} />
                    <div className="md:text-xl my-4">Apoya mi trabajo →
                        <span> <BuyMeACoffe /></span>
                    </div>
                </div>
            </div>
        </Layout >
    )
}
