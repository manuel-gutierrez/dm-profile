import AsideButton from "./AsideButton";
import ProfilePicture from "../Images/profile_img.jpeg"
import SocialMedia from "./SocialMedia";
import classes from "./Aside.module.css";

const Aside = () => {
    const pages = ["Why", "Cover letter", "Milestones", "Links"];
    return(
        <aside className={classes.aside}>
            <div className={classes.profile}>
            <img className={classes.img} src={ProfilePicture} />
            </div>
            <div className={classes.emoticonsContainer}>
                <SocialMedia />
            </div>
            <div className={classes.ul}>
            { pages.map((title) => {
                return (
                <div className={classes.li}>
                    <AsideButton text={title}/>
                </div>
                )
                })
            }
            </div>
        </aside>
    )
}
export default Aside;