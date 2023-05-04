import classes from "./Navbar.module.css";
import Why from "../Db/why";
import MainImages from "./MainImages";
import { useState } from "react";

const Navbar = () => {
	const [toggleNavbar, setToggleNavbar] = useState(false);
	return (
		<div className={classes.main}>
			{/* {   !toggleNavbar && <MainImages /> } */}
			{toggleNavbar && (
				<div className={classes.text}>
					<h3> {Why} </h3>
				</div>
			)}
		</div>
	);
};

export default Navbar;
