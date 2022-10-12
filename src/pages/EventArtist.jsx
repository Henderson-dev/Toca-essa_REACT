import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import HeroPage from "../components/HeroPage";
import useFetch from "../backend/useFetch";
import CardRequest from "../components/CardRequest";
import MensageScreen from "../components/MensageScreen";
import { Container, Row } from "react-bootstrap";
import SetlistGroup from "../components/SetlistGroup";

export default function EventArtist() {
  // Pega o id do evento na url
  const { id } = useParams();
  const idEvent = { id };

  // Call API page ID in Wordpress
  //let pathApiData = "evento/" + idEvent.id;
  let pathApiData = "evento/" + idEvent.id;
  let dataFromPage = "wp-json/wp/v2/" + pathApiData;
  const { data: pageData, error, isLoad } = useFetch(dataFromPage);
  console.log(pageData);

  //const requestsMusics = pageData.acf.lista_de_pedidos;
  //console.log(requestsMusics);

  return isLoad === true ? ( // Aguardando carregamento
    <>
      <Header status="logado" dashboard="true"></Header>
      <MensageScreen msg="Carregando..." />
    </>
  ) : // Caso tenha erro na chamada da API
  error ? (
    <>
      <Header status="logado" dashboard="true"></Header>
      <MensageScreen msg="Sem conexão com a API" error={error.response} />
    </>
  ) : (
    <>
      <Header status="logado" dashboard="true"></Header>
      <HeroPage title="Pedidos recebidos"></HeroPage>
      <section className="list-requests">
        <Container>
          <Row className="d-flex list-request">
            {pageData.acf.lista_de_pedidos.map((card, index) => {
              return (
                <CardRequest
                  key={index}
                  row={index + 1}
                  select={card.selecionar}
                  music={card.nome_da_musica_pedido}
                  artist={card.nome_do_artistabanda_pedido}
                  idevent={idEvent.id}
                ></CardRequest>
              );
            }).reverse()}
          </Row>
        </Container>
      </section>
      <SetlistGroup
            idevento={id}
            dataSetlist={pageData.acf.lista_de_musicas_do_repertorio}
            page="artist"
          ></SetlistGroup>      
    </>
  );
}
