import "./SearchInput.css";
import { useState, useEffect, useContext } from "react";

const SearchInput = () => {
  const [searchPoke, setSearchPoke] = useState("");
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    if (searchPoke.trim() !== "") {
      const showPoke = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
          .then((response) => response.json())
          .then((data) => {
            const filteredPokemon = data.results.filter((pokemon) =>
              pokemon.name.startsWith(searchPoke.toLowerCase())
            );
            setPokeData(filteredPokemon);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };

      showPoke();
    } else {
      setPokeData([]);
    }
  }, [searchPoke]);

  const handleSearchPoke = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchPoke(searchValue);
  };

  const pokeName = (name) => {
    if (name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
    return "";
  };

  const pokeNumber = (url) => {
    const number = url.split("/")[6];
    let pokeNumber =
      number < 10
        ? "#00" + number
        : number < 100
        ? "#0" + number
        : "#" + number;
    return pokeNumber;
  };

  return (
    <>
      <input
        type="text"
        value={searchPoke}
        onChange={handleSearchPoke}
        placeholder="Search Pokemon"
      />
      <div>
        {pokeData.map((pokemon) => (
          <div key={pokemon.name}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokemon.url.split("/")[6]
              }.png`}
              alt={pokemon.name}
            />
            <p>{pokeNumber(pokemon.url)}</p>
            <h2>{pokeName(pokemon.name)}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchInput;
