import CvBtype from "../../../Components/CvBtype";
import CvAtype from "../../../Components/CvAtype";
import classes from "./Frame2022.module.css";
import Silice30 from "../../../Images/smart_grid_model.jpeg"
import Isgt2016 from "../../../Images/isgt_2016_north_america.jpeg"

const Silice = (props) => {
    const text = props.title
    const images = [
        Silice30,
        Isgt2016
    ]
    const bullets = props.bullets;
    return (
        <div className={classes.main}>
            <CvAtype images={images} text ={text}>
                <CvBtype bullets={bullets} text ={text}/>
            </CvAtype>
        </div>
    )
}
export default Silice;