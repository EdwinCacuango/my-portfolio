import Layout from "../../components/layout"
import { ShareBtns } from "../../components/ShareBtns"
import { GraphQLClient, gql } from "graphql-request"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import IconBar from "../../components/IconBar"

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
                <div className="my-8">
                    <p className="text-xl my-4">
                        <span className="bg-rose-500 px-4 py-1.5 text-slate-100">
                            {post.category[0].name}
                        </span> • {dateP}
                    </p>
                </div>
            </div>
            <div className="mt-16 lg:mt-8 flex justify-center w-full">
                <img src={post.coverPhoto.url} alt="" className="w-[100%] lg:w-[90%]" />
            </div>
            {/* Encabezado para movil */}
            <div className="lg:hidden">
                <h1 className="title mt-4">{post.title}</h1>
                <p className="my-2">{post.shortDescription}</p>
                <div className="my-4">
                    <p className="text-base my-2">
                        <span className="bg-rose-500 px-4 py-1.5 text-slate-100">
                            {post.category[0].name}
                        </span> • {dateP}
                    </p>
                </div>
            </div>
            <div className="content-import mt-2 border-t-2 pt-3"
                dangerouslySetInnerHTML={{ __html: post.content.html }}
            >
            </div>
            <div className="md:flex justify-between border-t-2 mt-8 pt-3 px-8">              
                {/* Autor */}
                <div className="flex gap-4 items-center">
                    <div className="w-28 ">
                        <img src="/fotoPerfil-cuadrada.jpg"
                            alt="Foto de perfil"
                            className="object-contain rounded-full w-full"
                        />
                    </div>
                    <div>
                        <p className="lg:text-xl">Edwin Cacuango</p>
                        <p>Autor</p>
                    </div>
                    <ShareBtns title={post.title} slug={post.slug} category={post.category[0].name} />
                </div>
            </div>
        </Layout>
    )
}
