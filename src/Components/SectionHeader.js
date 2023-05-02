import classes from "./SectionHeader.module.css";

const SectionHeader = (props) => {
    return (
        <div className={classes.main}>
             <h1> {props.title.toUpperCase()} </h1>
             <h3> {props.subTitle} </h3>
        </div>
    )
}
export default SectionHeader;