import Image from "next/image"
import Layout from "../components/layout"
import ExperienceTable from "../components/ExperienceTable/ExperienceTable"
import { Presentation } from "../components/Presentation"
import { AboutMe } from "../components/AboutMe"


export default function Home() {
  return (
    <Layout home>
        <Presentation />
        <AboutMe />
        <section className="section-home">
          <h2 className="title-2">02. Experiencia</h2>
          <ExperienceTable />
        </section>

    </Layout>

  )
}
