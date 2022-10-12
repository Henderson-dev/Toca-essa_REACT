import { React, useState } from "react";
import uuid from "react-uuid";
import { Row } from "reactstrap";
import EvenInsertFlahsCard from "./EvenInsertFlahsCard";

export default function FormInsertSetlist() {
  const setlist = [];

  const [data, setData] = useState(setlist);
  const [music, setMusic] = useState();
  const [artist, setArtist] = useState();

  // Função apra deletar os cards da tela
  const deleteCard = (id) => {
    setData((prevCards) => {
      return prevCards.filter((card) => id !== card.id);
    });
  };

  // Insere os cards na tela
  function insertCardsMusic(id, music, artist) {
    const newItem = {
      id: id,
      music: music,
      artist: artist,
    };
    const newItems = [...data, newItem];
    setData(newItems);
    // Clear inputs in form setlist
    setMusic("");
    setArtist("");
    document.getElementById("nome_musica").focus();
  }

  return (
    <>
      <div className="box-content">
        <p>
          Adicione aqui as músicas do seu repertório que deseja divulgar no
          evento.
        </p>
        <h1>Adicionar música</h1>
      </div>
      <div className="form-setlist">
        <div className="box-form">
          <label htmlFor="nome_musica">
            <h2>Nome da música</h2>
            <input
              type="text"
              id="nome_musica"
              name="nome_musica"
              maxLength="120"
              required
              value={music}
              onChange={(e) => {
                setMusic(e.target.value);
              }}
            />
          </label>
          <label htmlFor="nome_artista">
            <h2>Nome do artista / banda</h2>
            <input
              type="text"
              name="nome_artista"
              maxLength="120"
              value={artist}
              onChange={(e) => {
                setArtist(e.target.value);
              }}
              required
            />
          </label>
        </div>
        <div className="box-submit">
          <span
            className="bto-addmusic"
            onClick={() => insertCardsMusic(uuid(), music, artist)}
          >
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2897 0.799998V21.48H7.76969V0.799998H12.2897ZM19.9297 9.04V13.2H0.0896876V9.04H19.9297Z"
                fill="#A0168F"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="group-setlist">
        <Row>
          {data
            .map((flashMusic, index) => {
              return (
                <EvenInsertFlahsCard
                  key={flashMusic.id}
                  music={flashMusic.music}
                  artist={flashMusic.artist}
                  id={flashMusic.id}
                  deleteCard={deleteCard}
                />
              );
            })
            .reverse()}
        </Row>
      </div>
    </>
  );
}
