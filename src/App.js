import classes from './App.module.css';
import Navbar from "./Components/Navbar";
import AsideButton from "./Components/AsideButton";
import Body from "./Pages/Body";
import ProfilePicture from "./profile_img.jpeg"
import { Fragment } from 'react';
import Github from './Components/Emoticons/Github';
import Linkedin from './Components/Emoticons/Linkedin';
import Instagram from './Components/Emoticons/Instagram';

function App() {
  const pages     = ["Home", "CV", "Cover letter", "Links"];
  const github1   = "https://github.com/DavidMejia025";
  const github2    = "https://github.com/clayman1325";
  const linkedin  = "https://www.linkedin.com/in/david-mejia-bonilla-b8005470/";
  const instagram = "https://www.instagram.com/davidfdomejia/";

  const handleSocialMedia = () => {
    <a
    >

    </a>
  }
  return (
    <Fragment>
      <div className={classes.navbar}>
        <Navbar/>
      </div>
      <div className={classes.main}>
        <aside className={classes.aside}>
          <div className={classes.profile}>
            <img className={classes.img} src={ProfilePicture} />
          </div>
          <div className={classes.emoticonsContainer}>
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
        <body className={classes.body}>
          <Body className={classes.body}/>
        </body>
      </div>
    </Fragment>
  );
}

export default App;
