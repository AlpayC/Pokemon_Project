import { useState } from "react";
import SearchInput from "./components/SearchInput/SearchInput";

import "./App.css";
import DarkMode from "./components/DarkMode/DarkMode";


function App() {

  return (
    <>
      <DarkMode />
      <SearchInput />
    </>
  );
}

export default App;
