import { useEffect, useState } from "react";
import PokemonItems from "../PokemonItems/PokemonItems";
import "./PokemonList.css";

const PokemonList = () => {
	const [pokemonData, setPokemonData] = useState([]);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon?limit=1010&offset=0")
			.then(res => res.json())
			.then(data => setPokemonData(data.results))
			.catch(err => console.log(`Fehler: ${err}`));
	}, []);

	return (
		<section className='pokemon-list-sec'>
			{pokemonData ? (
				pokemonData.map((pokemon, index) => {
					return <PokemonItems pokemon={pokemon} key={index} />;
				})
			) : (
				<p>loading data..</p>
			)}
		</section>
	);
};

export default PokemonList;
