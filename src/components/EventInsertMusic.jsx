import { React, useState, useRef } from "react";
import { Container, Row } from "reactstrap";
import { rootPath, pathsApi } from "../backend/usePaths";
import FlshCardMusic from "../components/FlshCardMusic";
import uuid from "react-uuid";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function EventInsertMusic({ idevento }) {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [music, setMusic] = useState("");
  const [artist, setArtist] = useState("");
  const form = useRef(null);

  // Esconde mensagem na tela depois de alguns segundos
  function timeMessage() {
    setTimeout(function () {
      setStatus("");
    }, 8000);
  }

  // Função para limpar campos
  function clearFields() {
    setMusic("");
    setArtist("");
  }

  // Define o caminho do endpoint de inserção de pedidos no evento
  const routeAPI = rootPath + pathsApi[2].route;

  let handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    //form.submit();
    setMessage("loading");
    try {
      let res = await fetch(routeAPI, {
        method: "POST",
        body: data,
      }).then((response) => {
        console.log(response);
        if (response.status === 200) {
          setStatus("ok");
          // Insere card de múisca na tela
          insertCardsMusic(uuid(), music, artist);
          setMessage("");
          clearFields();
          timeMessage();
        } else {
          setStatus("erro");
          setMessage("");
          clearFields();
          timeMessage();
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  //
  //useEffect(() => {}, []);

  const setlist = [
    {
      id: uuid(),
      music: "Michelle",
      artist: "The Beatles",
    },
  ];

  const [data, setData] = useState(setlist);

  // Insere os cards na tela
  function insertCardsMusic(id, music, artist) {
    //console.log(music, artist);
    const newItem = {
      id: id,
      music: music,
      artist: artist,
    };
    const newItems = [...data, newItem];
    setData(newItems);
  }

  // Função para mudar a cor de fundo dos cards de músia
  let bgCollor = "card-pink";
  function cardColor(number) {
    // Mutiple of 3
    let catNumber = number % 3;
    switch (catNumber) {
      case 0:
        bgCollor = "card-pink";
        break;
      case 1:
        bgCollor = "card-blue";
        break;
      case 2:
        bgCollor = "card-purple";
        break;
      default:
        bgCollor = "";
        break;
    }
    return bgCollor;
  }

  return (
    <>
      <section className="hero-do-music">
        <Container>
          <Row>
            <div className="col-lg-4"></div>
            <div className="col-lg-7">
              <h1>Bem vindo</h1>
              <p>Apresentação Jonh Cover Lenon</p>
              <div className="box-adress">
                <h2>Birosca Bar</h2>
                <p>Rua Almicar de Castro, 886 Pampulha - Belo Horizonte - MG</p>
              </div>
              <div className="form-do-music">
                <h2>
                  Qual música<br></br>gostaria de escutar<br></br>hoje?
                </h2>
                <form ref={form} onSubmit={handleSubmit}>
                  <input type="hidden" name="id_evento" value={idevento} />
                  <label htmlFor="nome_musica">
                    <textarea
                      name="nome_musica"
                      placeholder="Digite aqui o nome da música..."
                      maxLength="120"
                      onChange={(e) => setMusic(e.target.value)}
                      value={music}
                      required
                    ></textarea>
                  </label>
                  <div className="box-artist">
                    <label htmlFor="nome_artista">
                      <h2>Qual artista ou banda ?</h2>
                      <input
                        type="text"
                        name="nome_artista"
                        maxLength="120"
                        required
                        onChange={(e) => setArtist(e.target.value)}
                        value={artist}
                      />
                    </label>
                    <input
                      type="submit"
                      value="Enviar"
                      className="form-right"
                    />
                  </div>
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
                </form>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <section className="group-request">
        <Container>
          <div className="box-title-hero">
            <h1>
              Seus<br></br>pedidos
            </h1>
          </div>
          <Row>
            {data
              .map((flashMusic, index) => {
                return (
                  <FlshCardMusic
                    music={flashMusic.music}
                    artist={flashMusic.artist}
                    key={flashMusic.id}
                    id={flashMusic.id}
                    color={cardColor(index)}
                  ></FlshCardMusic>
                );
              })
              .reverse()}
          </Row>
        </Container>
      </section>
    </>
  );
}
