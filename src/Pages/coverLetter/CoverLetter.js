import classes from "./CoverLetter.module.css"
import SectionHeader from "../../Components/SectionHeader";
import Why from "../../Db/why";

const CoverLetter = () => {
    return (
        <div className={classes.main}>
            <SectionHeader title="Cover Letter" subTitle={Why[1]} />
        </div>
    )
}

export default CoverLetter;