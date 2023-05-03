import classes from "./Card.module.css";

const Card = (props) => {
    return (
        <div className={classes.main}>
            <div className={classes.header}>
                <h2> {props.title} </h2>
            </div>
            <div className={classes.body}>
                {props.children}
            </div>
        </div>
    )
}
export default Card