import { React, useRef } from "react";
import { Container, Row } from "reactstrap";
import SetlistCard from "./SetlistCard";
import TitleBox from "./TitleBox";
import { rootPath, pathsApi } from "../backend/usePaths";

export default function SetlistGroup({ idevento, dataSetlist }) {
  //console.log(dataSetlist);
  const formLike = useRef(null);

  // Define o caminho do endpoint de inserção de pedidos no evento
  const routeAPI = rootPath + pathsApi[3].route;

  async function likeSubmit(action, rowmusic) {
    //console.log(action + rowmusic);

    const data = new FormData();

    // Set no id do evento
    data.append("id_evento", idevento);
    data.append("numero_musica", rowmusic);
    data.append("acao", action);

    //e.preventDefault();
    //form.submit();
    //setMessage("loading");
    //console.log(data);

    try {
      let res = await fetch(routeAPI, {
        method: "POST",
        body: data,
      }).then((response) => {
        console.log(response);
        if (response.status === 200) {
          // setStatus("ok");
          // setMessage("");
          // clearFields();
          // timeMessage();
        } else {
          // setStatus("erro");
          // setMessage("");
          // clearFields();
          // timeMessage();
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <section className="setlist-group">
        <form ref={formLike}>
          <Container>
            <Row>
              <TitleBox title="Setlist de hoje" bgcolor="pink"></TitleBox>
              {dataSetlist.map((setlist, index) => {
                return (
                  <SetlistCard
                    key={index}
                    music={setlist.nome_da_musica}
                    artist={setlist.nome_do_artistabanda}
                    row={index + 1}
                    sendfunction={likeSubmit}
                    // like={setlist.curtidas}
                    // unlike={setlist.nao_curtida}
                  ></SetlistCard>
                );
              })}
            </Row>
          </Container>
        </form>
      </section>
    </>
  );
}
