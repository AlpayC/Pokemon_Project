import PokemonList from "../../components/PokemonList/PokemonList";
import "./Home.css";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { DarkModeContext } from "../../context/Context";

const Home = () => {
	const { darkMode, setDarkMode } = useContext(DarkModeContext);
	return (
		<>
			<section className={darkMode ? "wrapper dark" : "wrapper light-mode"}>
				<Header />
				<PokemonList />
			</section>
		</>
	);
};

export default Home;
