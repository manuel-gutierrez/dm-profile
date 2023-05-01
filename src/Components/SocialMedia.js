import classes from "./SocialMedia.module.css";
import Github from './Emoticons/Github';
import Linkedin from './Emoticons/Linkedin';
import Instagram from './Emoticons/Instagram';

const SocialMedia = () => {
    const github1   = "https://github.com/DavidMejia025";
    const github2   = "https://github.com/clayman1325";
    const linkedin  = "https://www.linkedin.com/in/david-mejia-bonilla-b8005470/";
    const instagram = "https://www.instagram.com/davidfdomejia/";
    return (
        <div className={classes.emoticons}>
            <div className={classes.emoticon}>
                <Github url={github1}/>
            </div>
            <div className={classes.emoticon}>
                <Github url={github2}/>
            </div>
            <div className={classes.emoticon}>
                <Linkedin url={linkedin}/>
            </div>
            <div className={classes.emoticon}>
                <Instagram url={instagram}/>
            </div>
        </div>
    )
}
export default SocialMedia;