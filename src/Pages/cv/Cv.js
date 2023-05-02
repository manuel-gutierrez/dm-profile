import classes from "./Cv.module.css"
import Card from "../../Components/Card"
import Frame2011 from "./Componets/Frame2011"
import cvData from "../../Db/cv"
import { useState } from "react"
import { useEffect } from "react"
import SectionHeader from "../../Components/SectionHeader";
import Why from "../../Db/why";


const Cv = () => {
    const MAX_Y_POS = 4527;
    const years = () => {
        return cvData.years.map((value) => {
            return (
                <div id = {value} className={classes.year} onClick={activateYear}><span id = {value}> { value } </span></div>
            )
        })
    }

    const contentCards = ()=>{
        const cardChildren = ["undergrad"]
        const cards =Object.keys(cvData.cvCards)
        const children = (id) => cardChildren.includes(id) ? <Frame2011 /> : <p> Hola david mejia </p>;
        return cards.map((id) => {
                return (
                    <div id = {id} className={classes.info_container}>
                        <Card title={id.title}>{children(id)}</Card>
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
        cardIds.map((cardId) => {
            const element = document.getElementById(cardId);
            element.style.top = parseInt(yPosition) + "px";
            (window.getComputedStyle(element).display == "block") ? element.style.display = "none" : element.style.display = "block";
            yPosition += 600;
        })
    }
    return (
        <div>
            <SectionHeader title="Curriculum Vitae" subTitle={Why[0]} />
            <div className={classes.main}>
                <div className={classes.timeline}>
                    <div className={classes.tube}>
                        {years()}
                    </div>
                </div>
                <div className={classes.information}>
                    {contentCards()}
                </div>
            </div>
        </div>
    )
}

export default Cv;
