import "./SearchInput.css";
import { useState, useEffect, useContext } from "react";
import { PokemonDataContext, ALLPokemonDataContext } from "../../context/Context";

const SearchInput = () => {
	const [searchPoke, setSearchPoke] = useState("");
	const { pokemonData, setPokemonData } = useContext(PokemonDataContext);
	const {ALLPokemonData, setALLPokemonData} = useContext(ALLPokemonDataContext)
	
	useEffect(() => {
		if (searchPoke.trim() !== "") {
			const filteredPokemon = [...pokemonData].filter(pokemon =>	
			pokemon.name.startsWith(searchPoke.toLowerCase()));
			setPokemonData(filteredPokemon);
		} else {
			setPokemonData(ALLPokemonData)
		}
	}, [searchPoke]);

	const handleSearchPoke = e => {
		const searchValue = e.target.value.toLowerCase();
		setSearchPoke(searchValue);
	};

	return (
		<>
			<input
				className='search-pokemon-bar'
				type='text'
				value={searchPoke}
				onChange={handleSearchPoke}
				placeholder='Search Pokemon'
			/>
		</>
	);
};

export default SearchInput;