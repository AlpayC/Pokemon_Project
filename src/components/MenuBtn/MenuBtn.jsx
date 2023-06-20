import { useContext, useState } from "react";
import "./MenuBtn.css";
import { MenuClickedContext } from "../../context/Context";

const MenuBtn = () => {
	const { menuClicked, setMenuClicked } = useContext(MenuClickedContext);

	const openMenu = () => {
		setMenuClicked(prev => !prev);
	};

	return (
		<>
			<div onClick={openMenu} className='menu-btn'>
				<div className='menu-btn-line'></div>
				<div className='menu-btn-line'></div>
				<div className='menu-btn-line'></div>
			</div>

			<div style={menuClicked ? { display: "block" } : { display: "none" }}>
				{/* Hier kommt dann die Typen Seite rein */}
			</div>
		</>
	);
};

export default MenuBtn;
