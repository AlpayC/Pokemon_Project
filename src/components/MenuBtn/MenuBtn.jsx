import { useContext, useState } from "react";
import "./MenuBtn.css";
import { MenuClickedContext, DarkModeContext } from "../../context/Context";

const MenuBtn = () => {
	const { menuClicked, setMenuClicked } = useContext(MenuClickedContext);
	const { darkMode, setDarkMode } = useContext(DarkModeContext);

	const openMenu = () => {
		setMenuClicked(prev => !prev);
	};

	return (
		<>
			<div onClick={openMenu} className='menu-btn'>
				<div
					className={darkMode ? "menu-btn-line light" : "menu-btn-line"}
				></div>
				<div
					className={darkMode ? "menu-btn-line light" : "menu-btn-line"}
				></div>
				<div
					className={darkMode ? "menu-btn-line light" : "menu-btn-line"}
				></div>
			</div>

			<div style={menuClicked ? { display: "block" } : { display: "none" }}>
				{/* Hier kommt dann die Typen Seite rein */}
			</div>
		</>
	);
};

export default MenuBtn;
