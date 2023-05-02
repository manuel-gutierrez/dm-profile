import classes from "./AsideButton.module.css";
import LinkName   from "./AsideButtonLinks"
import { Link } from "react-router-dom";

const AsideButton = (props) => {
    return (
        <div className={classes.button}>
            <Link className={classes.a} to={props.text}> {props.text} </Link>
        </div>
    )
}

export default AsideButton;