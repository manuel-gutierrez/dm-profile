import classes from "./Presentation.module.css";
import { Link } from "react-router-dom";

const Presentation = () => {
    const title = ["Application to the Sofware Engineer position in", "Camus Energy"]
    const name = "David Mejia";
    const subDomain = ["Software Engineer (5 Yrs)", "MS.c Electrical Engineer (Control Systems)"]
    return (
        <div className={classes.main}>
            <div className={classes.title}>
                <p> {title[0]} <span className={classes.companyTitle}>{title[1]}</span></p>
            </div>
            <div className={classes.name}>
                <p> {name} </p>
            </div>
            <div className={classes.subDomain}>
                <p> <span>{subDomain[0]} </span></p>
                <p> {subDomain[1]} </p>
            </div>
            <div className={classes.bottom}>
                <Link className={classes.a} to="home"> START </Link>
            </div>
        </div>
    )
}

export default Presentation;