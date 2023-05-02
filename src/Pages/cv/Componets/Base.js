import CvBtype from "../../../Components/CvBtype";
import CvAtype from "../../../Components/CvAtype";
import classes from "./Base.module.css";


const Base = (props) => {
    return (
        <div className={classes.main}>
            <CvAtype images={props.images} text ={props.title}>
                <CvBtype bullets={props.bullets} text ={""}/>
            </CvAtype>
        </div>
    )
}
export default Base;