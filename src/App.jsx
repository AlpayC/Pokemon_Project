import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { LoaderContext, MenuClickedContext } from "./context/Context";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import { useState } from "react";
import SearchInput from "./components/SearchInput/SearchInput";

function App() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <MenuClickedContext.Provider value={{ menuClicked, setMenuClicked }}>
        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
          {isLoading ? <LoadingPage /> : <Home />}
          {/* <Header /><DarkMode />
      <SearchInput /> noch hinzufügen */}
        </LoaderContext.Provider>
      </MenuClickedContext.Provider>
    </>
  );
}

export default App;
