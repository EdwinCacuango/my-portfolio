import { GraphQLClient, gql } from "graphql-request"
import BlogCard from "../components/BlogCard"
import Layout from '../components/layout'
import { format, formatDistanceToNow } from "date-fns"
import { es } from "date-fns/locale"

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
  const sorted= posts.sort((a, b)=> (a.datePublish>b.datePublish)? -1: 1)

  const featured = sorted[0]
  const relevant1 = sorted[1]
  const relevant2 = sorted[2]

  //DATES FOR STYLED CARDS
  const featuredDate = formatDistanceToNow(new Date(featured.datePublish),  { locale: es })
  const relevant1Date = formatDistanceToNow(new Date(relevant1.datePublish),  { locale: es })
  const relevant2Date = formatDistanceToNow(new Date(relevant2.datePublish),  { locale: es })
  return (
    <Layout>
      <div>
        <h1 className="title mt-16 text-center">Mi Blog</h1>
        <p className="text-enphasis text-center">Un espacio para compartir sobre derecho y tecnología</p>
      </div>
      <section className="presentation-blog center max-w-[75%] mt-4">
        <div className="last-post">
          <BlogCard
            key={featured.id}
            title={featured.title}
            author={featured.author.username}
            coverPhoto={featured.coverPhoto.url}
            slug={featured.slug}
            datePublished={`hace ${featuredDate}`}
            category={featured.category[0].name}
            description={featured.shortDescription}
            cardStyle="post"
          />
        </div>        
          <BlogCard
            key={relevant1.id}
            title={relevant1.title}
            author={relevant1.author.username}
            coverPhoto={relevant1.coverPhoto.url}
            slug={relevant1.slug}
            datePublished={`hace ${relevant1Date}`}
            category={relevant1.category[0].name}
            description={relevant1.shortDescription}
            titleStyle="title-4"
            cardStyle="card-featured"
          />
          <BlogCard
            key={relevant2.id}
            title={relevant2.title}
            author={relevant2.author.username}
            coverPhoto={relevant2.coverPhoto.url}
            slug={relevant2.slug}
            datePublished={`hace ${relevant2Date}`}
            category={relevant2.category[0].name}
            description={relevant2.shortDescription}
            titleStyle="title-4"
            cardStyle="card-featured"
          />
      </section>
      <section className="mt-4">
        <h2 className="title-2">Todos los posts</h2>
        <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-row-auto gap-3">
          {
            sorted.map(post => {
              const dateP = format(new Date(post.datePublish), `d MMM yyyy`, { locale: es })
              return <BlogCard
                key={post.id}
                title={post.title}
                author={post.author.username}
                coverPhoto={post.coverPhoto.url}
                slug={post.slug}
                datePublished={dateP}
                category={post.category[0].name}
                description={post.shortDescription}
                cardStyle="normal-blog"
              />
            })
          }
        </div>
      </section>
    </Layout>
  )
}

