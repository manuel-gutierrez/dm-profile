import classes from "./Navbar.module.css";

const Navbar = () => {
    const text = "Former Control systems Engineer, with 5 years of experince﻿ working  in Web application development. Passionate to make smart grids work effectively and contribute to mitigate the cimate change."
    return (
        <div className={classes.main}>
            <div className={classes.text}>
                <p> {text} </p>
            </div>
        </div>
    )
}

export default Navbar;