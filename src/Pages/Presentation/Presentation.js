import classes from "./Presentation.module.css";

const Presentation = () => {
    const title = ["Aplication to Camus Energy for the Sofware Engineer position", "Camus Energy"]
    const name = "David Mejia";
    const subDomain = ["Software Engineer", "MS.c Electrical Engineering"];

    return (
        <div className={classes.main}>
            <div className={classes.title}>
                <h1> {title[0]}</h1>
            </div>
            <div className={classes.subTitle}>
                <div className={classes.name}>
                    <p> {name} </p>
                </div>
                <div className={classes.subDomain}>
                    <p> <span>{subDomain[0]} </span></p>
                    <p> {subDomain[1]} </p>
                </div>
            </div>
        </div>
    )
}

export default Presentation;