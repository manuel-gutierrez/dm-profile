import CvBtype from "../../../Components/CvBtype";
import CvAtype from "../../../Components/CvAtype";
import classes from "./Frame2022.module.css";
import Silice30 from "../../../Images/smart_grid_model.jpeg"
import Isgt2016 from "../../../Images/isgt_2016_north_america.jpeg"

const Frame2022 = () => {
    const text = "When Order close their Latam office project I decided to get back to study and I did a 1 - 1 Mentorship training program. The goal of that program was to shorten the gap between EE and CS so I studied Algorithms and Data Structures with professor Tim Rougarden material (videos and books) and did 3 projects one search engine, one code evaluator and a proof of concept of a Blockchain that implemens a prove of work concensus algorithm to learn and practice:";
    const images = [
        Silice30,
        Isgt2016,
        Silice30,
        Isgt2016,
        Silice30,
        Isgt2016,
    ]
    const bullets = [
        "isgt",
        "camus energy",
    ]
    return (
        <div className={classes.main}>
            {/* <CvBtype bullets={bullets} text ={text}/> */}
            <CvAtype images={images} text ={text}>
                <CvBtype bullets={bullets} text ={text}/>
            </CvAtype>
        </div>
    )
}
export default Frame2022;