import { UNSAFE_mapRouteProperties } from "react-router";
import classes from "./CvAtype.module.css";
import CvBtype from "./CvBtype";

const CvAtype = (props) => {
    const getImages = () => {
        return props.images.map((image) => {
            return (
                <div className={classes.image}>
                    <img src={image} alt="Isgt 2016" />
                </div>
            )
        })
    }
    return (
        <div className={classes.main}>
            <div className={classes.body}>
                <div className={classes.img_framework}>
                    {getImages()}
                </div>
                <div className={classes.children}>
                    { props.children }
                </div>
            </div>
        </div>
    )
}
export default CvAtype;