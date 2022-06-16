import Layout from "../components/layout"
import ExperienceTable from "../components/ExperienceTable/ExperienceTable"
import { Presentation } from "../components/Presentation"
import { AboutMe } from "../components/AboutMe"
import { Button } from "../components/UI/Button"
import { useState } from "react"
import { Projects } from "../components/Projects"


export default function Home() {
  const [isLegal, setIsLegal]=useState(true)
  return (
    <Layout home>
      <Presentation />
      <AboutMe />
      <section className="section-home" id="experience">
        <div className="flex gap-8 items-center">
          <h2 className="title-2">02. Experiencia</h2>
          <div>
            <Button onClick={(() => setIsLegal(true))}>
              Legal</Button>
            <Button stylesAdded="mx-2" onClick={() => setIsLegal(false)}>Tech</Button>
          </div>
        </div>
        <ExperienceTable isLegal={isLegal}/>
      </section>
      <Projects />

    </Layout>

  )
}
