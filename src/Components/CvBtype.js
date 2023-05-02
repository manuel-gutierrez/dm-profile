import classes from "./CvBtype.module.css";

const CvBtype = (props) => {
    return (
        <div className={classes.main}>
            <div className={classes.bullets}>
                <ul>
                    {props.bullets}
                </ul>
            </div>
        </div>
    )
}
export default CvBtype;