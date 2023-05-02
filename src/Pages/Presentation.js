import classes from "./Presentation.module.css";
import { Link } from "react-router-dom";
import CamusEnergyLogo from "../Images/camus_energy_logo.png"
import CamusEMS from "../Images/ems-monitor.jpeg"

const Presentation = () => {
    const title = ["Application to the Sofware Engineer position", "Camus Energy"]
    const name = "David Mejia";
    const subDomain = ["Software Engineer", "MS.c Electrical Engineering"]
    return (
        <div className={classes.main}>
            <div className={classes.title}>
                <p> {title[0]}</p>
            </div>
            {/* <div className={classes.companyTitle}>
                <img src={CamusEnergyLogo} className={classes.companyImg} />
            </div> */}
            <div className={classes.background}>
                <img src={CamusEMS} className={classes.ems} />
            </div>
            <div className={classes.bottom}>
                <Link className={classes.a} to="Why">
                    <div className={classes.title}>
                        <div className={classes.name}>
                            <p> {name} </p>
                        </div>
                        <div className={classes.subDomain}>
                            <p> <span>{subDomain[0]} </span></p>
                            <p> {subDomain[1]} </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Presentation;