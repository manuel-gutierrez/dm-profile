import classes from "./SectionHeader.module.css";

const SectionHeader = (props) => {
    return (
        <div className={classes.main}>
             <h1> {props.title.toUpperCase()} </h1>
             <p> {props.subTitle} </p>
        </div>
    )
}
export default SectionHeader;