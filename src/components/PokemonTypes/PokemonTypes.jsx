import SearchButton from "../SearchBtn/SearchBtn";
import "./PokemonTypes.css";

const PokemonTypes = () => {
  const [types, setTypes] = useState([]); // Zustand für die Pokémon-Typen. Hier werden die Typen als Array gespeichert
  const [selectedType, setSelectedType] = useState(""); // Zustand für den ausgewählten Pokémon-Typ ab Btn Click
  const [pokemonData, setPokemonData] = useState([]); // Zustand für die Pokémon-Daten
  const [searchClicked, setSearchClicked] = useState(false); // Zustand für den Suchvorgang ob gestartet oder nicht

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

  const clickedSearchBtn = () => {
    // Funktion, die ausgeführt wird, wenn der "Search"-Button geklickt wird
    setSearchClicked(true); // Setze den Zustand searchClicked auf true, um den Suchvorgang zu starten
  };

  useEffect(() => {
    if (searchClicked && selectedType !== "") {
      // Überprüfe, ob der Suchvorgang gestartet wurde und ein Pokémon-Typ ausgewählt wurde
      fetch(`https://pokeapi.co/api/v2/type/${selectedType}`)
        .then((response) => response.json())
        .then((data) => {
          const pokemonUrls = data.pokemon.map((item) => item.pokemon.url);

          // Erstellt ein Array von Fetch-Promises für die Pokémon-Detailanfragen
          const promises = pokemonUrls.map((url) =>
            fetch(url).then((response) => response.json())
          );

          // Führt alle Fetch-Promises aus und wartet auf ihre Auflösung
          Promise.all(promises)
            .then((pokemonDetails) => {
              // Verarbeitet die erhaltenen Pokémon-Daten
              const updatedPokemonData = pokemonDetails.map((data) => ({
                id: data.id,
                name: data.name,
                spriteUrl: data.sprites.other["official-artwork"].front_default,
              }));
              setPokemonData(updatedPokemonData);
              setSearchClicked(false); // Setze den Zustand searchClicked zurück, um den Suchvorgang erneut starten zu können
            })
            .catch((error) => {
              console.log("Fehler beim Laden", error);
            });
        })
        .catch((error) => {
          console.log("Fehler beim Laden", error);
        });
    }
  }, [searchClicked, selectedType]); // Die useEffect-Abhängigkeitsliste enthält searchClicked und selectedType
  return <>
  
  <>
      <h1>blabl aa</h1>
      <h1>Type</h1>
      <section className="types-container">
        {/* Rendert die Buttons für die Pokémon-Typen */}
        {types.map((type, index) => (
          <button key={index} onClick={() => inputTypeSelection(type.name)}>
            {type.name}
          </button>
        ))}
      </section>
      <button onClick={clickedSearchBtn}>Search</button>{" "}
      {/* Füge den Klick-Handler für den "Search"-Button hinzu */}
      <p>Output</p>
      {/* Rendert die Pokémon-Daten */}
      {pokemonData.map((pokemon, index) => (
        <div className="type-pokemon-items" key={index}>
          <img src={pokemon.spriteUrl} alt={pokemon.name} />
          <h2>{pokemon.name}</h2>
          <h2>{pokemon.id}</h2>
        </div>
      ))}</>;
};

export default PokemonTypes;
