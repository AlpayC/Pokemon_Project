import PokemonList from "../../components/PokemonList/PokemonList";
import "./Home.css";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { DarkModeContext } from "../../context/Context";

const Home = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <>
      <section className={darkMode ? "dark" : "light"}>
        <Header />
        <PokemonList />
      </section>
    </>
  );
};

export default Home;
