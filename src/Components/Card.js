import classes from "./Card.module.css";

const Card = (props) => {
    return (
        <div className={classes.main}>
            <div className={classes.header}>
                <h3> {props.title} </h3>
            </div>
            <div className={classes.body}>
                {props.children}
            </div>
            <div className={classes.footer}>
                { props.footer }
            </div>
        </div>
    )
}
export default Card