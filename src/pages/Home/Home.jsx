import PokemonList from "../../components/PokemonList/PokemonList";
import "./Home.css";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { DarkModeContext } from "../../context/Context";
import PokemonTypes from "../../components/PokemonTypes/PokemonTypes";

const Home = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <>
      <section className={darkMode ? "dark" : "light"}>

        <Header />
        {/* <PokemonTypes/> */}
        <PokemonList />
      </section>
    </>
  );
};

export default Home;
