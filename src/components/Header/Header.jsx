import LogoIMG from "../../assets/png/LogoIMG";
import { DarkModeContext } from "../../context/Context";
import MenuBtn from "../MenuBtn/MenuBtn";
import SearchInput from "../SearchInput/SearchInput";
import "./Header.css";
import DarkMode from "../DarkMode/DarkMode";

const Header = () => {
  return (
    /* Allgemeiner Header... alles reinpacken was gebraucht wird */
    <header>
      <LogoIMG />
      <div className="test-nav-div">
        <MenuBtn />
        <SearchInput />
        <DarkMode />
      </div>
    </header>
  );
};

export default Header;
