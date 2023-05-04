import classes from "./Home.module.css";
import Why from "./why/Why"
import Divider from "../Components/Divider";
import Cv from "./cv/Cv";
import CoverLetter from "./CoverLetter/CoverLetter";
import Links from "./Links/Links";
import Presentation from "./Presentation/Presentation";

const Home = () => {
    return (
        <div className={classes.main}>
            <Presentation />
            <Divider />
            <Why />
            <Divider />
            <CoverLetter />
            <Divider />
            <Cv />
            <Divider />
            <Links />
        </div>
    )
}

export default Home;