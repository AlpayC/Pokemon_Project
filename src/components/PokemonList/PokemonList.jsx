import { useEffect, useContext } from "react";
import PokemonItems from "../PokemonItems/PokemonItems";
import PokemonTypes from "../PokemonTypes/PokemonTypes";
import "./PokemonList.css";
import { MenuClickedContext, ALLPokemonDataContext, PokemonDataContext } from "../../context/Context";

const PokemonList = () => {
  const { pokemonData, setPokemonData } = useContext(PokemonDataContext);
  const { menuClicked, setMenuClicked } = useContext(MenuClickedContext);
  const {ALLPokemonData, setALLPokemonData} = useContext(ALLPokemonDataContext)

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1010&offset=0")
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data.results)
        setALLPokemonData(data.results)
      })
      .catch((err) => console.log(`Fehler: ${err}`));
  }, []);

  return (
    <section className="pokemon-list-sec">
      {menuClicked ? <PokemonTypes /> : ""}
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