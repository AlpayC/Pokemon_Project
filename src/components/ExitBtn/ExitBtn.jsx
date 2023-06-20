import "./ExitBtn.css";
import { MenuClickedContext } from "../../context/Context";
import { useContext } from "react";

const ExitBtn = () => {
  const { menuClicked, setMenuClicked } = useContext(MenuClickedContext);
  const openMenu = () => {
    setMenuClicked((prev) => !prev);
  };
  return (
    <>
      <button onClick={openMenu}>X</button>
    </>
  );
};

export default ExitBtn;
