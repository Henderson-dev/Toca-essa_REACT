import { React, useState } from "react";
import uuid from "react-uuid";
import { Row } from "reactstrap";
import EvenInsertFlahsCard from "./EvenInsertFlahsCard";
import { rootPath, pathsApi } from "../backend/usePaths";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function FormInsertSetlist() {
  const setlist = [];
  const [dataMusic, setDataMusic] = useState(setlist);
  const [music, setMusic] = useState();
  const [artist, setArtist] = useState();
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  // Função apra deletar os cards da tela
  const deleteCard = (id) => {
    setDataMusic((prevCards) => {
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
    const newItems = [...dataMusic, newItem];
    setDataMusic(newItems);
    // Clear inputs in form setlist
    setMusic("");
    setArtist("");
    document.getElementById("nome_musica").focus();
  }

  // Esconde mensagem na tela depois de alguns segundos
  function timeMessage() {
    setTimeout(function () {
      setStatus("");
    }, 5000);
  }

  // Define o caminho do endpoint de inserção de evento no back-end
  const routeAPI = rootPath + pathsApi[0].route;

  // Função que envia os dados do novo evento
  async function submitEvent() {
    setMessage("loading");
    setStatus("");

    // Inicia varial que vai armazenar os dados do formulário
    const dataEvent = new FormData();

    // Set no id do evento
    dataEvent.append("nome_artista", "Nome do artista");
    dataEvent.append("id_do_artista", "Id logado");
    dataEvent.append(
      "nome_evento",
      document.querySelector("#nome_evento").value
    );

    // Altera o formato da data para o formato brasileiro
    let dateEvent = document.querySelector("#date_evento").value;
    let dateFinal = `${dateEvent.substr(8, 2)}/${dateEvent.substr(
      5,
      2
    )}/${dateEvent.substr(0, 4)}`;
    //console.log(dateFinal);
    dataEvent.append("data_evento", dateFinal);
    dataEvent.append("hora", document.querySelector("#horario_evento").value);

    // Separa hora e minutos da duração
    let hourMinutes = document.querySelector("#duracao_evento").value;
    let hoursDuration = hourMinutes.substr(0, 2);
    let minutesDuration = hourMinutes.substr(3, 2);
    dataEvent.append("duracao_horas", hoursDuration);
    dataEvent.append("duracao_minutos", minutesDuration);
    dataEvent.append(
      "nome_estabelecimento",
      document.querySelector("#nome_local").value
    );
    dataEvent.append("rua", document.querySelector("#rua").value);
    dataEvent.append("numero", document.querySelector("#numero").value);
    dataEvent.append(
      "complemento",
      document.querySelector("#complemento").value
    );
    dataEvent.append("bairro", document.querySelector("#bairro").value);
    dataEvent.append("cep", document.querySelector("#cep").value);
    dataEvent.append("cidade", document.querySelector("#cidade").value);
    dataEvent.append("estado", document.querySelector("#estado").value);

    // Monta o setlist de músicas
    let countMusic = 0;
    dataMusic.map((datMusic, index) => {
      countMusic = index + 1;
      return (
        dataEvent.append(`musica${index}`, datMusic.music),
        dataEvent.append(`banda${index}`, datMusic.artist),
        countMusic
      );
    });
    dataEvent.append("setlist-quantidade", countMusic);

    try {
      let res = await fetch(routeAPI, {
        method: "POST",
        body: dataEvent,
      }).then((response) => {
        console.log(response);
        if (response.status === 200) {
          setStatus("ok");
          setMessage("");
          timeMessage();
        } else {
          setStatus("erro");
          setMessage("");
          timeMessage();
        }
      });
    } catch (err) {
      setStatus("erro");
      //console.log(err);
    }
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
          {dataMusic
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
      <Row>
        <div className="col-12 text-center">
          <span className="submit-event" onClick={submitEvent}>
            Enviar
          </span>

          <div className="box-mensage">
            {message === "loading" && (
              <div className="box-msg">
                <ScaleLoader color="#ffffff" height={30} />
                <p>Enviando seu pedido...</p>
              </div>
            )}
            {status === "ok" && <p>Pedido enviado com sucesso!!</p>}
            {status === "erro" && <p>Erro, tente mais tarde!!</p>}
          </div>
        </div>
      </Row>
    </>
  );
}
