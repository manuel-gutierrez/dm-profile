import OrderTeam from "../Images/order_team.png";
import Silice31 from "../Images/silice_3_1.png"
import Silice30 from "../Images/smart_grid_model.jpeg"
import Isgt2016 from "../Images/isgt_2016_north_america.jpeg"
import DavidMejia from "../Images/david_mejia.png"
import RubyTalk from "../Images/ruby_talk.png";
import classes from "./MainImages.module.css";

const MainImages = () => {
    return (
        <div className={classes.img_container}>
            <div className={classes.img_frame}>
                <div className={classes.why_img}>
                    <img src={RubyTalk} alt="image of David Mejia" />
                </div>
                <div className={classes.why_img}>
                    <img src={OrderTeam} alt="image of David Mejia" />
                </div>
                <div className={classes.why_img}>
                    <img src={DavidMejia} alt="image of David Mejia" />
                </div>
                <div className={classes.why_img}>
                    <img src={Silice31} alt="image of David Mejia" />
                </div>
                <div className={classes.why_img}>
                    <img src={Silice30} alt="image of David Mejia" />
                </div>
                <div className={classes.why_img}>
                    <img src={Isgt2016} alt="Isgt 2016" />
                </div>
            </div>
        </div>
    )
}

export default MainImages;