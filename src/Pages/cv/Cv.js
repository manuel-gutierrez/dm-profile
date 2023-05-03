import classes from "./Cv.module.css"
import Card from "../../Components/Card"
import cvData from "../../Db/cv"
import SectionHeader from "../../Components/SectionHeader";
import Why from "../../Db/why";
import CvComponents from "./Componets/ComponentDictionary";
import { useEffect, useState } from "react";

const Cv = () => {
    const [maxYpos, setMaxYpos] = useState(0)

    const calculateMaxYpos = () => {
        const lastYear = document.getElementById("2012");
        setMaxYpos(lastYear.offsetTop - 70)
    }


    const addYears = () => {
        return cvData.years.map((value) => {
            return (
                <div id = {value} className={classes.year} onMouseOver={activateYear} onClick={activateYear}><span id = {value}> { value } </span></div>
            )
        })
    }

    const addContentCards = ()=>{
        const cvCards = cvData.cvCards;
        const cards =Object.keys(cvCards)
        const children = (componentName) => CvComponents[componentName];
        return cards.map((id) => {
                const title = cvCards[id].title;
                return (
                    <div id = {id} className={classes.info_container}>
                        <Card title={title}>{children(id)}</Card>
                    </div>
                )
            }
        )
    }

    const activateYear = (e) => {
        if(maxYpos == 0) calculateMaxYpos();
        const year = e.target.id;
        const cardIds = cvData.dynamic[year];
        const reference = document.getElementById(year);
        let yPosition = Math.min(maxYpos, reference.offsetTop);
        Object.keys(cvData.cvCards).map((cardId) => {
            const element = document.getElementById(cardId);
            element.style.display = "none";
        })
        cardIds.map((cardId) => {
            const element = document.getElementById(cardId);
            element.style.top = parseInt(yPosition) + "px";
            element.style.display = "block";
            yPosition += 600;
        })
    }
    
    useEffect(() => {
        const element = document.getElementById("running");
        element.style.display = "block";
    })
    return (
        <div>
            <SectionHeader title="Milestones" subTitle={Why[0]} />
            <div className={classes.main}>
                <div className={classes.timeline}>
                    <div className={classes.tube}>
                        {addYears()}
                    </div>
                </div>
                <div className={classes.information}>
                    {addContentCards()}
                </div>
            </div>
        </div>
    )
}

export default Cv;
