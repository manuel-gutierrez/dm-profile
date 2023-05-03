import classes from "./CoverLetter.module.css"
import SectionHeader from "../../Components/SectionHeader";
import Why from "../../Db/why";
import AsideButton from "../../Components/AsideButton";

const CoverLetter = () => {
    return (
        <div className={classes.main}>
            <SectionHeader title="Cover Letter" subTitle={Why[1]} />
            <div className={classes.button}>
                <AsideButton text={"Download =>"}/>
            </div>
        </div>
    )
}

export default CoverLetter;