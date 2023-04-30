import classes from "./Card.module.css";
import NextArrow from "./NextArrow";

const Card = (props) => {
    return (
        <div className={classes.main}>
            <div className={classes.header}>
                <img src={props.img}></img>
            </div>
            <div className={classes.body}>
                <div><p> {props.text}</p></div>
            </div>
            <div className={classes.footer}>
                <div className={classes.icon}>
                    <NextArrow />
                </div>
            </div>
        </div>
    )
}
export default Card