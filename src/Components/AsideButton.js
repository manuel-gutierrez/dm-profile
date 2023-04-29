import classes from "./AsideButton.module.css";

const AsideButton = (props) => {
    return (
        <div className={classes.button}>
            <a
                href="https://km-robota.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                { props.text }
            </a>
        </div>
    )
}

export default AsideButton;