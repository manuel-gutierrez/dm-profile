import AsideButton from "./AsideButton";
import ProfilePicture from "../Images/profile_img.jpeg"
import SocialMedia from "./SocialMedia";
import classes from "./Aside.module.css";

const Aside = () => {
    const pages     = ["Home", "Why", "Cover letter", "CV", "Links"];
    return(
        <aside className={classes.aside}>
            <div className={classes.profile}>
            <img className={classes.img} src={ProfilePicture} />
            </div>
            <div className={classes.emoticonsContainer}>
                <SocialMedia />
            </div>
            <ul className={classes.ul}>
            { pages.map((title) => {
                return (
                <li className={classes.li}>
                    <AsideButton text={title}/>
                </li>
                )
                })
            }
            </ul>
        </aside>
    )
}
export default Aside;