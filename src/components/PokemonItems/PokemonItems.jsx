import { useEffect, useState } from "react";
import "./PokemonItems.css";
import { useContext } from "react";
import { PokemonDataContext } from "../../context/Context";

const PokemonItems = (props) => {
  const { pokemonData, setPokemonData } = useContext(PokemonDataContext);
  const [pokemonDetailData, setPokemonDetailData] = useState();
  const url = props.pokemon.url;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPokemonDetailData(data))
      .catch((err) => console.log(`Fehler: ${err}`));
  }, [pokemonData]);

  // console.log(pokemonDetailData);

  // Umformung der Werte für die Darstellung
  // prüfen ob pokemonDetailData schon verfügbar ist !!! sonst Error undefined reading id
  // alles auf 4 Stellen bringen
  let number = pokemonDetailData?.id;
  number = number < 10 ? "000" + number : number;
  number = number >= 10 && number < 100 ? "00" + number : number;
  number = number >= 100 && number < 1000 ? "0" + number : number;
  // ersten Buchstaben groß schreiben
  let name = props.pokemon.name;
  name = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <>
      {pokemonDetailData ? (
        <article className="pokemon-item-art">
          <img
            className="poke-img"
            src={
              pokemonDetailData.sprites.other["official-artwork"].front_default
            }
            alt={name}
          />
          <div>
            <p>#{number}</p>
            <p>{name}</p>
          </div>
        </article>
      ) : (
        <p>loading data..</p>
      )}
    </>
  );
};

export default PokemonItems;
