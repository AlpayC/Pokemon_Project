import { useEffect, useState } from "react";
import PokemonItems from "../PokemonItems/PokemonItems";
import "./PokemonList.css";
import { useContext } from "react";
import { PokemonDataContext } from "../../context/Context";
import PokemonTypes from "../PokemonTypes/PokemonTypes";

const PokemonList = () => {
  const { pokemonData, setPokemonData } = useContext(PokemonDataContext)

    useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1010&offset=0")
    .then((res) => res.json())
    .then((data) => {
      setPokemonData(data.results)
      console.log(pokemonData);
    })
    .catch((err) => console.log(`Fehler: ${err}`))
  },[])

  return (
    <section className="pokemon-list-sec">
      <PokemonTypes />
      <h1>Pokemonlist</h1>
      {pokemonData ? (
        pokemonData.map((pokemon, index) => {return <PokemonItems pokemon={pokemon} key={index} />})
      ) : (
        <p>loading data..</p>
      )}
    </section>
  );
};

export default PokemonList;
