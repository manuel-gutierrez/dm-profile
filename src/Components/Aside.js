import AsideButton from "./AsideButton";
import ProfilePicture from "../Images/profile_img.jpeg";
import SocialMedia from "./SocialMedia";
import classes from "./Aside.module.css";

const Aside = () => {
	const pages = ["Why", "Cover letter", "Resume", "Links"];
	const pagesIds = ["why", "cover-letter", "resume", "links"];
	return (
		<aside className={classes.aside}>
			<div className={classes.profile}>
				<img
					className={classes.img}
					src={ProfilePicture}
					alt="profile-picture"
				/>
			</div>
			<div className={classes.emoticonsContainer}>
				<SocialMedia />
			</div>
			<nav>
				<ul>
					{pages.map((title, index) => {
						return (
							// rome-ignore lint/suspicious/noArrayIndexKey: <Using it as quick fix. Should be refactored as an object,not array.>
							<li className={classes.li} key={index}>
								<AsideButton id={pagesIds[index]} text={title} />
							</li>
						);
					})}
				</ul>
			</nav>
		</aside>
	);
};
export default Aside;
