import classes from "./Why.module.css";
import OrderTeam from "../../Images/order_team.png";
import Silice31 from "../../Images/silice_3_1.png"
import Silice30 from "../../Images/smart_grid_model.jpeg"
import Isgt2016 from "../../Images/isgt_2016_north_america.jpeg"
import DavidMejia from "../../Images/david_mejia.png"
import RubyTalk from "../../Images/ruby_talk.png";
import SectionHeader from "../../Components/SectionHeader";
import whyText from "../../Db/why"
// const aboutMe = () => {
//     return (
//         <p>
//             I am David Mejia who was born and rised in Colombia - South America. For the past 5 years I have been working as a Software Engineer and my last experience was
//             <span className={classes.calendly}> Calendly </span>.
//             I also,  hold a Master Degree In Control Systems and worked as Smart Grids researcher for 3 years. In these five years I have worked directly in
//             <span className={classes.textInBold}> five start ups </span> mostly
//             from the United States. During the previous years I have wear multiple hats and get involved
//             with different programing languages and technologies. As a backend developer I have expertise with
//             <span className={classes.textInBold}> Ruby, Python </span>,
//             and
//             <span className={classes.textInBold}>  NodeJS </span> interacting mainly with relational
//             database such as
//             <span className={classes.textInBold}>  Postgres, PosGis and MySQL </span> and other No relational databases like
//             <span className={classes.textInBold}>  MongoDb, Redis, ElasticSearch </span> etc.
//             In terms of Fullstack  web development I have worked with
//             <span className={classes.textInBold}> Ruby on Rails, Flask </span>,
//             <span className={classes.textInBold}> Vue, React </span> plus
//             <span className={classes.textInBold}>  Typescript  </span>
//             (BE and FE) connected through graphQL. Most of the projects that Ive worked has been deployed to
//             <span className={classes.textInBold}> AWS infrastructure </span>
//             , and in the last experience with Calendly I approached GCP.
//             <span className={classes.textInBold}> Google Cloud Platform </span>
//         </p>
//     )
// }
const Why = () => {
    const aboutMe = () => {
        return (
            <p>
                I am David Mejia who was born and rised in Colombia - South America. For the past 5 years I have been working as a Software Engineer and my last experience was
                <span className={classes.calendly}> Calendly </span>.
                I also,  hold a Master Degree In Control Systems and worked as Smart Grids researcher for 3 years. In these five years I have worked directly in
                <span className={classes.textInBold}> five start ups </span> mostly
                from the United States. During the previous years I have wear multiple hats and get involved
                with different programing languages and technologies. As a
                <span className={classes.textInBold}> backend developer </span> with Objected Oriented Programing Languages
                interacting mainly with
                <span className={classes.textInBold}>  relational databases </span> and other
                <span className={classes.textInBold}>  No relational databases</span> as well as
                <span className={classes.textInBold}> messaging systems</span>.
                In terms of
                <span className={classes.textInBold}> Fullstack</span> web development
                  I have worked with several modern Javascript
                <span className={classes.textInBold}> Frameworks  </span>, all deployed principally to
                <span className={classes.textInBold}> AWS infrastructure </span>
                , however in the last experience with Calendly I approached.
                <span className={classes.textInBold}> Google Cloud Platform </span>
            </p>
        )
    }
    const aboutCamusEnergy = [
        "After  enjoying working in different start ups -and industries- with different tech stacks and diverse teams I am focusing my efforts towards my next proffesional mission to join an early stage start up were I can contribute significantly in the development, growing and succeed of the product and the company. In that regard, my preferences are to continue working as Fullstack developer in a tech company were the software product is science or engineering oriented.  Therefore, the company and its grid management platform fits perfectly whay Im looking for right now."
        ,"Camus Energy ofers a unique carrer opportunity to me because it combines the Business purpuse of significantly meet the carbonfoot print reduction from my academic expertice with my current practice as Software engineer. I found in Camus the perfect  place to reconcile my passions and knowledge while contributing  to the world by helping to mitigate climate change."
    ]

    return (
        <div>
            <SectionHeader title="Why" subTitle={whyText[2]} />
            <div className={classes.about}>
                <div className={classes.about_container}>
                    <div className={classes.header}>
                        <h2> About me</h2>
                    </div>
                    <div className={classes.body}>
                        <p> {aboutMe()}</p>
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
                        </div>
                    </div>
                </div>
                <div className={classes.about_container}>
                    <div className={classes.header}>
                        <h2> About Camus</h2>
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
        </div>
    )
}

export default Why;