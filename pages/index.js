import Link from "next/link"
import Layout from "../components/Layout/layout"


export default function Home() {
  return (
    <Layout home>
      <Link href="/blog"><a>Blog</a></Link>
    </Layout>

  )
}
