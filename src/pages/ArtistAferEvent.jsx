import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import HeroPage from "../components/HeroPage";
import useFetch from "../backend/useFetch";
import CardRequest from "../components/CardRequest";
import MensageScreen from "../components/MensageScreen";
import { Container, Row } from "react-bootstrap";
import SetlistGroup from "../components/SetlistGroup";
import GroupReceivedMessages from "../components/GroupReceivedMessages";

export default function ArtistAferEvent() {
  // Pega o id do evento na url
  const { id } = useParams();
  const idEvent = { id };

  // Call API page ID in Wordpress
  //let pathApiData = "evento/" + idEvent.id;
  let pathApiData = "evento/" + idEvent.id;
  let dataFromPage = "wp-json/wp/v2/" + pathApiData;
  const { data: pageData, error, isLoad } = useFetch(dataFromPage);

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
    // {
    //   // let address = `
    //   // ${pageData.acf.rua}, 
    //   // ${pageData.acf.numero} 
    //   // ${pageData.acf.complemento} 
    //   // ${pageData.acf.bairro}
    //   // `;
    //   // let addressPlace = `
    //   // ${pageData.acf.cidade} 
    //   // ${pageData.acf.estado} 
    //   // `;      
    // }
    <>
      <Header
        status="logado"
        dashboard="true"
        idArtist={pageData.acf.id_do_artista}
      ></Header>
      <HeroPage
        title="Pedidos recebidos"
        nameArtist="Michael Lenon"
        idArtist={pageData.acf.id_do_artista}
        nameEvent={pageData.acf.nome_do_evento}
        dataEvent={pageData.acf}
        goback={true}
        closeEvent={pageData.acf.evento_encerrado}
      ></HeroPage>
      <section className="list-requests">
        <Container>
          <Row className="d-flex list-request">
            {pageData.acf.lista_de_pedidos ? (
              <>
                {pageData.acf.lista_de_pedidos
                  .map((card, index) => {
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
                  })
                  .reverse()}
              </>
            ) : (
              <>
                <h2>Este evento não recebeu nenhum pedido !</h2>
              </>
            )}
          </Row>
        </Container>
      </section>
      {pageData.acf.lista_de_musicas_do_repertorio && (
        <SetlistGroup
          idevento={id}
          dataSetlist={pageData.acf.lista_de_musicas_do_repertorio}
          page="artist"
          title="Setlist do evento"
        ></SetlistGroup>
      )}
      {pageData.acf.lista_de_comentarios && (
        <GroupReceivedMessages
          dataMessages={pageData.acf.lista_de_comentarios}
          title="Mensagens recebidas"
        ></GroupReceivedMessages>
      )}
    </>
  );
}
