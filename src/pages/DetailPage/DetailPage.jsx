import { useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { PokemonDataContext } from "../../context/Context";
import Header from "../../components/Header/Header";
import BackBtn from "../../components/BackBtn/BackBtn";

const DetailPage = () => {
  const idParams = useParams();

  const [detailData, setDetailData] = useState([]);

  useEffect(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${idParams.name.toLocaleLowerCase()}`
    )
      .then((response) => response.json())
      .then((detailData) => {
        console.log(detailData);
        setDetailData(detailData);
      })
      .catch((error) => {
        console.log("Fehler beim laden", error);
      });
  }, []);

  return (
    <>
      <Header />

      {detailData ? (
        <article className="pokemon-item-art">
          <img
            className="poke-img"
            src={detailData.sprites?.other["official-artwork"].front_default}
            alt={detailData.name}
          />
          <div>
            <p>#{detailData.number}</p>
            <p>{detailData.name}</p>
            <div className="type-container">
              {detailData.types ? (
                <section>
                  {detailData.types.map((item, index) => (
                    <h2 key={index}> {item.name} </h2>
                  ))}
                </section>
              ) : (
                <p>Daten werden geladen ...</p>
              )}
            </div>
          </div>
        </article>
      ) : (
        <p> Daten werden geladen</p>
      )}
      <BackBtn></BackBtn>
    </>
  );
};

export default DetailPage;
