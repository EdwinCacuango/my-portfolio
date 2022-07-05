import Layout from "../components/layout"
import ExperienceTable from "../components/ExperienceTable/ExperienceTable"
import { Presentation } from "../components/Home/Presentation"
import { AboutMe } from "../components/Home/AboutMe"
import { Button } from "../components/UI/Button"
import { useState } from "react"
import { Projects } from "../components/Home/Projects"
import FormContact from "../components/Home/FormContact"


export default function Home() {
  const [isLegal, setIsLegal] = useState(true)
  return (
    <Layout home>
      <Presentation />
      <AboutMe />
      <section className="section-home mt-20 md:mt-auto" id="experience">
        <div className="w-full">
          <div className="flex  gap-4 md:gap-8 items-center">
            <h2 className="title-2">02. Experiencia</h2>
            <div>
              <Button onClick={(() => setIsLegal(true))}>
                Legal</Button>
              <Button stylesAdded="mx-2" onClick={() => setIsLegal(false)}>Tech</Button>
            </div>
          </div>
          <ExperienceTable isLegal={isLegal} />
        </div>
      </section>
      <Projects />
      <FormContact />
    </Layout>

  )
}
