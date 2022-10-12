import { React, useState } from "react";
import { Container, Row } from "reactstrap";
import SetlistCard from "./SetlistCard";
import SetlistCardArtist from "./SetlistCardArtist";
import TitleBox from "./TitleBox";
import { rootPath, pathsApi } from "../backend/usePaths";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function SetlistGroup({ idevento, dataSetlist, page }) {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  // Define o caminho do endpoint de inserção de pedidos no evento
  const routeAPI = rootPath + pathsApi[3].route;

  // Envia acao de like e unlike para o back-end
  async function likeSubmit(action, rowmusic) {
    setMessage("loading");

    const data = new FormData();

    // Set no id do evento
    data.append("id_evento", idevento);
    data.append("numero_musica", rowmusic);
    data.append("acao", action);

    let actionSvg = document.querySelector("#" + action + "-" + rowmusic);
    actionSvg.classList.add("set-" + action);

    try {
      let res = await fetch(routeAPI, {
        method: "POST",
        body: data,
      }).then((response) => {
        console.log(response);
        if (response.status === 200) {
          setMessage("");
        } else {
          setMessage("");
          setStatus("erro");
        }
      });
    } catch (err) {
      setStatus("erro");
      console.log(err);
    }
  }

  return (
    <>
      <section className="setlist-group">
        <form>
          <Container>
            <Row>
              <TitleBox title="Setlist de hoje" bgcolor="pink"></TitleBox>

              {message === "loading" && (
                <div className="box-msg">
                  <ScaleLoader color="#ffffff" height={10} />
                  <p>Enviando seu pedido...</p>
                </div>
              )}
              {status === "erro" && (
                <div className="box-msg">
                  <p>
                    Aconteceu um erro na sua solicitação... Tente novamente em
                    alguns minutos.
                  </p>
                </div>
              )}
              {dataSetlist.map((setlist, index) => {
                return page === "artist" ? (
                  <>
                    <SetlistCardArtist
                      key={index}
                      music={setlist.nome_da_musica}
                      artist={setlist.nome_do_artistabanda}
                      row={index + 1}
                      like={setlist.curtidas}
                      unlike={setlist.nao_curtida}
                    ></SetlistCardArtist>
                  </>
                ) : (
                  <>
                    <SetlistCard
                      key={index}
                      music={setlist.nome_da_musica}
                      artist={setlist.nome_do_artistabanda}
                      row={index + 1}
                      sendfunction={likeSubmit}
                    ></SetlistCard>
                  </>
                );
              })}
            </Row>
          </Container>
        </form>
      </section>
    </>
  );
}
