import "./DarkMode.css";
import img from '../../../public/darkLight.png'

import { useState } from 'react'

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(dark => !dark);
  };
  
  return (
    <>
      <h1>DarkMode</h1>
      <div className={darkMode ? 'dark' : 'light'}>
        <img onClick={toggleDarkMode} src={img} alt="" />
      </div>
    </>
  );
};

export default DarkMode;