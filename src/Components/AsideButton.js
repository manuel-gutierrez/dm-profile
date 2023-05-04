import classes from "./AsideButton.module.css";
//  Aside button is in the nav element.
//  therefore the syntax should be around <a> tag.
const AsideButton = (props) => {
	return (
		// rome-ignore lint/a11y/useValidAnchor: <react syntax>
		<a className={classes.button} href={`#${props.id}`}>
			{props.text}
		</a>
	);
};

export default AsideButton;
