import Card from "../Components/Card";
import classes from "./Home.module.css";
import Icon from "./icon.svg"

const Home = () => {
    return (
        <div className={classes.main}>
            <div className={classes.frame}>
                <div className={classes.cards}>
                    <Card img={Icon} text={"Why"}/>
                    <Card img={Icon} text={"CV"}/>
                    <Card img={Icon} text={"Cover letter"}/>
                    <Card img={Icon} text={"Links"}/>
                </div>
            </div>
        </div>
    )
}

export default Home;