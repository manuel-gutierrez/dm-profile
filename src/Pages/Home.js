import Card from "../Components/Card";
import classes from "./Home.module.css";
import Icon from "../Images/rtu_undergrad_project.jpeg";
import OrderTeam from "../Images/order_team.png";
import Silice31 from "../Images/silice_3_1.png"
import Silice30 from "../Images/smart_grid_model.jpeg"
import Isgt2016 from "../Images/isgt_2016_north_america.jpeg"
import DavidMejia from "../Images/david_mejia.png"
import RubyTalk from "../Images/ruby_talk.png";

const Home = () => {
    const why = "Former Control systems Engineer, with 5 years of experince﻿ working in Web application development. Passionate to make smart grids work effectively and contribute to mitigate the cimate change."
    const aboutMe          = "I am David Mejia who was born and rised in Colombia - South America. For the past 5 years I have been working as a Software Engineer and my last experience was Calendly.com. I also,  hold a Master Degree In Control Systems and worked as Smart Grids researcher for 3 years. In these five years I have worked directly in more than five start ups  from the United States; as a backend developer using Ruby Python and NodeJS and as Fullstack working with Ruby on Rails plus Vue or React, and Typescript (BE and FE) connected through graphQL. Most of the projects that Ive worked has been deployed to AWS infrastructure, and in the last experience with Calendly I approached GCP."
    const aboutCamusEnergy = ["After 5 years enjoying working in different start ups as Backend end and Fullstak developer with different programing languages  I would like to meet a new endeveour where I can work in an application with the economical big impact on people lifes, and technical challenges as [Calendly.com](http://Calendly.com) the scheduling Saas that currently have more than 10M active users, The second most important thing now is to get a place where the spirit energy and talent of [Order.co](http://Order.co) allowed me  beign part of a small Engineering team of 7, to  learnt the best Software Engineering practices from build and spining up a brand new services to multiple backend integrations with a deep understand of Quality guided by Unit testing.", "To sum up I want to combine the advantages of a potential Unicorn, with the energy, and chances to contribute in an early stage start up. And most important, is Camus Energy product itself since Energy in particular, Microgrids, storage systems at scale, Electric vehicles and Smart grids in general has been my favorite and most curious interest since 2012. I started working in Smart grids topics in my last year of E.E undergrad when I saw the necessity for the world, the big and interesting engeneering challenges, and the huge impact in climate change that these new way of building power systems could bring. I demostrate this pasion when I lead and built a Smart Grid model with its Scada that I programed in labview who interacted with its own propietary RTUs. Furthermore I got partularly intered in Micorgids operation and Economic Dispatch so that my Master thesis was focused in the optimal integration of high penetration of RES in a distribution system."]

    return (
        <div className={classes.main}>
            <div className={classes.why_response}>
                <h3>{why}</h3>
            </div>
            <div className={classes.about}>
                <div className={classes.about_container}>
                    <div className={classes.header}>
                        <h2> About me</h2>
                    </div>
                    <div className={classes.body}>
                        <p> {aboutMe}</p>
                    </div>
                </div>
                <div className={classes.about_container}>
                    <div className={classes.header}>
                        <h2> About Camus Energy Tech</h2>
                    </div>
                    <div className={classes.body}>
                        <p> {aboutCamusEnergy[0]}</p>
                        <p> {aboutCamusEnergy[1]}</p>
                    </div>
                </div>
            </div>
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
                        <img src={Silice30} alt="image of David Mejia" />
                    </div>
                    <div className={classes.why_img}>
                        <img src={Silice31} alt="image of David Mejia" />
                    </div>
                    <div className={classes.why_img}>
                        <img src={Isgt2016} alt="Isgt 2016" />
                    </div>
                </div>
            </div>
            {/* <Card img={Icon} text={why}/> */}
        </div>
    )
}

export default Home;