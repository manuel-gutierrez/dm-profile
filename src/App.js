import classes from './App.module.css';
import Navbar from "./Components/Navbar";
import AsideButton from "./Components/AsideButton";
import Body from "./Pages/Body";
import ProfilePicture from "./profile_img.jpeg"
import { Fragment } from 'react';

function App() {
  const pages = ["Home", "CV", "Cover letter", "Links"]
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
