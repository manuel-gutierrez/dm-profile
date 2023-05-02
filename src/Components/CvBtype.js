import classes from "./CvBtype.module.css";

const CvBtype = (props) => {
    return (
        <div className={classes.main}>
            {   props.text &&
                <div className={classes.text}>
                    <p>
                        { props.text }
                    </p>
                </div>
            }
            <div className={classes.bullets}>
                <ul>
                    {props.bullets}
                </ul>
            </div>
        </div>
    )
}
export default CvBtype;