import "./DarkMode.css";
import img from "../../../src/assets/png/darkLight.png";

import { useState, useContext } from "react";
import { DarkModeContext } from "../../context/Context";

const DarkMode = () => {
	const { darkMode, setDarkMode } = useContext(DarkModeContext);

	const toggleDarkMode = () => {
		setDarkMode(dark => !dark);
	};

	return (
		<>
			<div>
				<img
					className={darkMode ? "dark-light-img brighter" : "dark-light-img"}
					onClick={toggleDarkMode}
					src={img}
					alt='Dark Light Mode'
				/>
			</div>
		</>
	);
};

export default DarkMode;
