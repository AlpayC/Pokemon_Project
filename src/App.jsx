import "./App.css";
import Home from "./pages/Home/Home";
import {
  LoaderContext,
  MenuClickedContext,
  PokemonDataContext,
  DarkModeContext,
} from "./context/Context";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [pokemonData, setPokemonData] = useState([]);

  return (
    <>
      <PokemonDataContext.Provider value={{ pokemonData, setPokemonData }}>
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
          <MenuClickedContext.Provider value={{ menuClicked, setMenuClicked }}>
            <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
              {isLoading ? (
                <LoadingPage />
              ) : (
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
                </BrowserRouter>
              )}
              {/* <DarkMode />
      <SearchInput /> noch hinzufügen */}
            </LoaderContext.Provider>
          </MenuClickedContext.Provider>
        </DarkModeContext.Provider>
      </PokemonDataContext.Provider>
    </>
  );
}

export default App;
