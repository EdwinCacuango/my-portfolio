import { useState, useEffect } from "react"
import { ExperienceData } from "./ExperienceData"
import { format} from 'date-fns'
import { es } from "date-fns/locale"

const ExperienceTable = ({ isLegal }) => {
    //Total of jobs imported
    const [jobs] = useState(ExperienceData)

    //List of jobs according category clicked
    const [jobsDisplay, setJobsDisplay] = useState(() => {
        let result = jobs.filter((item) => item.tech === false)
        return result
    })

    //Job clicked in left colum
    const [jobSelected, setJobSelected] = useState(jobsDisplay[0])

    //Job show with details
    useEffect(() => {
        if (!isLegal) {
            let noLegal = jobs.filter((item) => item.tech === true)
            if (noLegal.length > 0) {
                setJobsDisplay(noLegal)
            }
        }
    }, [isLegal, jobs])

    //Listener to cliked job
    const listenId = (e) => {
        const id = e.target.id
        const result = jobsDisplay.filter(item => item.id === +id)
        setJobSelected(result[0])
    }

    let startDate= format(new Date(jobSelected.startDate), "MMM yyyy", { locale: es })
    let endDate = format(new Date (jobSelected.endDate), "MMM yyyy", { locale: es })

    return (
        <div className="flex flex-col-reverse md:flex-row mt-3 md:mt-8 gap-6 md:gap-12">
            {isLegal &&
                <>
                    <ul className="md:w-[30%] organizations-list">
                        {
                            jobsDisplay.map(item => {
                                return (
                                    <li key={item.id} className="m-0">
                                        <button id={item.id} onClick={listenId}>{item.organization}</button>
                                    </li>)
                            })
                        }
                    </ul>
                    <div className="mt-3 md:mt-0w-full">
                        <h3 className="text-xl md:title-3">{jobSelected.title}<span className="text-rose-500"> @{jobSelected.organization}</span></h3>
                        <p className="text-slate-500 text-xl">{startDate} - {endDate}</p>
                        <ul className="ul-about break-words w-full">
                            {jobSelected.activities.map((item, index) => {
                                return <li key={index} className="break-words">{item}</li>
                            })}
                        </ul>
                    </div>
                </>
            }
            {!isLegal &&
                <div className="block text-center">
                    <p className="text-3xl"> Nada por mostrar aún. Sigo en búsqueda de oportunidades</p>
                    <p className="text-enphasis">¿Tienes algo en mente? Escríbeme</p>
                </div>
            }

        </div>
    )
}

export default ExperienceTable