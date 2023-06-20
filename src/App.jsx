import "./App.css";
import Home from "./pages/Home/Home";
import DetailPage from "./pages/DetailPage/DetailPage";
import {
  LoaderContext,
  MenuClickedContext,
  PokemonDataContext,
  DarkModeContext,
  ALLPokemonDataContext,
} from "./context/Context";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [pokemonData, setPokemonData] = useState([]);
  const [ALLPokemonData, setALLPokemonData] = useState([])

  return (
    <>
    <ALLPokemonDataContext.Provider value={{ALLPokemonData, setALLPokemonData}}>
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
                    <Route path="/details/:name" element={<DetailPage />} />
                  </Routes>
                </BrowserRouter>
              )}
            </LoaderContext.Provider>
          </MenuClickedContext.Provider>
        </DarkModeContext.Provider>
      </PokemonDataContext.Provider>
      </ALLPokemonDataContext.Provider>
    </>
  );
}

export default App;