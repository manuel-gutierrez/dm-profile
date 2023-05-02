import classes from "./Cv.module.css"
import Card from "../../Components/Card"
import cvData from "../../Db/cv"
import SectionHeader from "../../Components/SectionHeader";
import Why from "../../Db/why";
import CvComponents from "./Componets/ComponentDictionary";
import { useEffect } from "react";


const Cv = () => {
    const MAX_Y_POS = 4527;
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
        const year = e.target.id;
        const cardIds = cvData.dynamic[year];
        const reference = document.getElementById(year);
        reference.classList.add("show")
        let yPosition = Math.min(MAX_Y_POS, reference.offsetTop);
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
            <SectionHeader title="Curriculum Vitae" subTitle={Why[0]} />
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
