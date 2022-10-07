import React from "react";
import EventInsertMusic from "../components/EventInsertMusic";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import SetlistGroup from "../components/SetlistGroup";
import useFetch from "../backend/useFetch";
import MensageScreen from "../components/MensageScreen";
import EventClosed from "../components/EventClosed";
import EventWait from "../components/EventWait";
import { useEffect } from "react";

export default function EventPublic() {
  // Pega o id do evento na url
  const { id } = useParams();
  const idEvent = { id };


  let pathApiData = "evento/" + idEvent.id;
  let dataFromPage = "wp-json/wp/v2/" + pathApiData;
  const { data: pageData, error, isLoad } = useFetch(dataFromPage);

  return isLoad === true ? (
    // Aguardando carregamento
    <MensageScreen msg="Carregando..." />
  ) : // Caso tenha erro na chamada da API
  error ? (
    <MensageScreen msg="Sem conexão com a API" error={error.response} />
  ) : (
    <>
      <Header status=""></Header>
      {pageData.acf.evento_encerrado === true ? (
        <>
          <EventClosed
            artist={pageData.acf.nome_artista}
            event={pageData.acf.nome_do_evento}
            datevent={pageData.acf.data}
            hourevent={pageData.acf.hora}
          ></EventClosed>
        </>
      ) : pageData.acf.evento_iniciar === true ? (
        <>
          <EventInsertMusic idevento={id}></EventInsertMusic>
          <SetlistGroup
            idevento={id}
            dataSetlist={pageData.acf.lista_de_musicas_do_repertorio}
          ></SetlistGroup>
        </>
      ) : (
        <>
          <EventWait
            artist={pageData.acf.nome_artista}
            event={pageData.acf.nome_do_evento}
            datevent={pageData.acf.data}
            hourevent={pageData.acf.hora}
          ></EventWait>
        </>
      )}
    </>
  );
}
