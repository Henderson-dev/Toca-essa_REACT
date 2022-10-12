import React from "react";
import { rootPath, pathsApi } from "../backend/usePaths";

export default function CardRequest({ row, music, artist, select, idevent }) {
  // Define o caminho do endpoint de seleção de pedidos de música
  const routeAPI = rootPath + pathsApi[6].route;

  // Função para selecionar e deselecionar os cards
  async function selectMusic(row, idevent) {
    let cardMusic = document.querySelector(".card-" + row);
    let actionCard = "";
    if (cardMusic.classList.contains("selected-card")) {
      cardMusic.classList.remove("selected-card");
      actionCard = "unselect";
    } else {
      cardMusic.classList.add("selected-card");
      actionCard = "select";
    }

    //console.log(routeAPI);

    const data = new FormData();

    // Set no id do evento
    data.append("id_evento", idevent);
    data.append("numero_musica", row);
    data.append("acao", actionCard);

    //console.log(idevent + " " + row + " " + actionCard);

    try {
      let res = await fetch(routeAPI, {
        method: "POST",
        body: data,
      }).then((response) => {
        console.log(response);
        if (response.status === 200) {
          //setMessage("");
        } else {
          //setMessage("");
          //setStatus("erro");
        }
      });
    } catch (err) {
      //setStatus("erro");
      console.log(err);
    }
  }

  return (
    <>
      <article className="col-lg-4">
        <div
          className={
            select === true
              ? `box-request selected-card card-${row}`
              : `box-request card-${row}`
          }
          onClick={() => {
            selectMusic(row, idevent);
          }}
        >
          <h2>{music}</h2>
          <span>{artist}</span>
        </div>
      </article>
    </>
  );
}
