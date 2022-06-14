import { useState, useEffect } from "react"
import { ExperienceData } from "./ExperienceData"
import styles from "./ExperienceTable.module.css"

const ExperienceTable = () => {
    const [jobs] = useState(ExperienceData)
    const [isLegal, setIsLegal] = useState(true)
    const [jobsDisplay, setJobsDisplay] = useState(() => {
        let result = jobs.filter((item) => item.tech === false)
        return result
    })
    const [jobSelected, setJobSelected]=useState(jobsDisplay[0])

    useEffect(() => {
        if (!isLegal) {
            let noLegal = jobs.filter((item) => item.tech === true)
            if (noLegal.length > 0) {
                setJobsDisplay(noLegal)
            }
        }
    }, [isLegal, jobs])

    const listenId=(e)=>{
        const id=e.target.id
        const result=jobsDisplay.filter(item=>item.id===+id)
        setJobSelected(result[0])
    }


    return (
        <div className={styles.experienceTable}>
            <div>
                <button onClick={(() => setIsLegal(true))}>Legal</button>
                <button onClick={() => setIsLegal(false)}>Tech</button>
            </div>
            
            {isLegal &&
                <>
                    <ul className={styles.organizationsList}>
                        {
                            jobsDisplay.map(item=>{
                                return <li key={item.id}><button className={styles.button} id={item.id} onClick={listenId}>{item.organization}</button></li>
                            })
                        }
                    </ul>
                    <div>
                        <h4>{jobSelected.title} @ {jobSelected.organization}</h4>
                        <p>Date</p>
                        <ul className='list-activities'>
                            {jobSelected.activities.map((item, index)=>{
                                return <li key={index}>{item}</li>
                            })}
                        </ul>
                    </div>
                </>


            }
            {!isLegal &&
                <p>En búsqueda de oportunidades</p>

            }

        </div>
    )
}

export default ExperienceTable