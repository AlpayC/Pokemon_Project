import "./PokemonTypes.css";
import { useState, useEffect, useContext } from "react";
import { MenuClickedContext, ALLPokemonDataContext, PokemonDataContext } from "../../context/Context";

const PokemonTypes = () => {
  const [types, setTypes] = useState([]); // Zustand für die Pokémon-Typen. Hier werden die Typen als Array gespeichert
  const [selectedType, setSelectedType] = useState(""); // Zustand für den ausgewählten Pokémon-Typ ab Btn Click
  const { pokemonData, setPokemonData } = useContext(PokemonDataContext);
  const { menuClicked, setMenuClicked } = useContext(MenuClickedContext);
  const {ALLPokemonData, setALLPokemonData} = useContext(ALLPokemonDataContext)

  useEffect(() => {
    // Fetch, um die Pokémon-Typen zu laden (wird nur einmal beim Start der App ausgeführt) und die Typen Btns bleiben gespeichert
    fetch("https://pokeapi.co/api/v2/type")
      .then((response) => response.json())
      .then((data) => {
        setTypes(data.results);
      })
      .catch((error) => {
        console.log("Fehler beim Laden", error);
      });
  }, []);

  const inputTypeSelection = (type) => {
    // Funktion zum Festlegen des ausgewählten Pokémon-Typs wenn ein Type Btn geklickt
    setSelectedType(type);
  };

  const searchPokemons = () => {
    // Funktion, die ausgeführt wird, wenn der "Search"-Button geklickt wird
    setMenuClicked(false)
    if (selectedType !== "") {
      // Überprüfe, ob der Suchvorgang gestartet wurde und ein Pokémon-Typ ausgewählt wurde
      fetch(`https://pokeapi.co/api/v2/type/${selectedType}`)
        .then((response) => response.json())
        .then((data) => {
          let updatedPokemonData = data.pokemon.map((elm) => elm.pokemon);
          setPokemonData(updatedPokemonData);
        })
        .catch((error) => {
          console.log("Fehler beim Laden", error);
        });
    }
  };

  const reset = () => {
    setMenuClicked(false)
    setPokemonData(ALLPokemonData)
  }

  return (
    <>
      <section className="types-container">
        {/* Rendert die Buttons für die Pokémon-Typen */}
        {types.map((type, index) => (
          <button key={index} onClick={() => inputTypeSelection(type.name)}>
            {type.name}
          </button>
        ))}
      </section>
      <button onClick={searchPokemons}>Search</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default PokemonTypes;
