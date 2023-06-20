import "./DarkMode.css";
import img from "../../../public/darkLight.png";

import { useState, useContext } from "react";
import { DarkModeContext } from "../../context/Context";

const DarkMode = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    setDarkMode((dark) => !dark);
  };

  return (
    <>
      <div>
        <img onClick={toggleDarkMode} src={img} alt="" />
      </div>
    </>
  );
};

export default DarkMode;
