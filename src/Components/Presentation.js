import AsideButton from "./AsideButton";
import classes from "./Presentation.module.css";

const Presentation = () => {
    const title = "Application to the Sofware Engineer position in Camus Energy"
    const name = "David Mejia";
    const subDomain = "Software Engineer (5+ Yrs) with MS.c Electrical Engineer (Control Systems) "
    return (
        <div className={classes.main}>
            <div className={classes.title}>
                <p> {title} </p>
            </div>
            <div className={classes.name}>
                <p> {name} </p>
            </div>
            <div className={classes.subDomain}>
                <p> {subDomain} </p>
            </div>
            <div className={classes.bottom}>
                <button>
                    <a
                        href="https://km-robota.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        { "START" }
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Presentation;