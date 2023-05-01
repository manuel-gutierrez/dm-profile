import classes from './App.module.css';
import Navbar from "./Components/Navbar";
import Aside from "./Components/Aside";
import Body from "./Pages/Body";
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <div className={classes.navbar}>
        <Navbar/>
      </div>
      <div className={classes.main}>
        <Aside />
        <body className={classes.body}>
          <Body className={classes.body}/>
        </body>
      </div>
    </Fragment>
  );
}

export default App;
