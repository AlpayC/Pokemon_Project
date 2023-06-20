import LogoIMG from "../../assets/png/LogoIMG";
import MenuBtn from "../MenuBtn/MenuBtn";
import "./Header.css";

const Header = () => {
	return (
		/* Allgemeiner Header... alles reinpacken was gebraucht wird */
		<header>
			<LogoIMG />
			<div className='test-nav-div'>
				<MenuBtn />
			</div>
		</header>
	);
};

export default Header;
