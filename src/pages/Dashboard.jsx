import React, { useState } from "react";
import EventCard from "../components/EventCard";
import Header from "../components/Header";
import HeroPage from "../components/HeroPage";
import formatDate from "../funtions/DateFormat";
import MensageScreen from "../components/MensageScreen";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useData from "../backend/useData";

export default function Dashboard() {
  // Pega o id do evento na url
  const { id } = useParams();
  const idArtist = { id };

  // Call API page ID in Wordpress filter by id artist
  let pathApiData = "evento?idartist=" + idArtist.id;
  let dataFromPage = "wp-json/wp/v2/" + pathApiData;
  const {
    data: pageData,
    todayEvent,
    nextEvent,
    closeEvents,
    error,
    isLoad,
  } = useData(dataFromPage);

  return isLoad === true ? ( // Aguardando carregamento
    <>
      <Header status="logado" idArtist={idArtist.id}></Header>
      <MensageScreen msg="Carregando..." />
    </>
  ) : // Caso tenha erro na chamada da API
  error ? (
    <>
      <Header status="logado" idArtist={idArtist.id}></Header>
      <MensageScreen msg="Sem conexão com a API" error={error.response} />
    </>
  ) : (
    <>
      <Header status="logado" idArtist={idArtist.id}></Header>
      <HeroPage
        title="Próximos eventos"
        nameArtist="Michael Lenon"
        idArtist={idArtist.id}
      ></HeroPage>
      <section className="list-events">
        <Container>
          {todayEvent && (
            <>
              {todayEvent
                .map((cardevent) => {
                  let address = `
                    ${cardevent.acf.rua}, 
                    ${cardevent.acf.numero} 
                    ${cardevent.acf.complemento} 
                    ${cardevent.acf.bairro}
                    `;
                  let addressPlace = `
                    ${cardevent.acf.cidade} 
                    ${cardevent.acf.estado} 
                    `;
                  return (
                    <EventCard
                      key={cardevent.id}
                      eventid={cardevent.id}
                      event={cardevent.acf.nome_do_evento}
                      address={address}
                      addressPlace={addressPlace}
                      dayEvent={formatDate(cardevent.acf.data, "day")}
                      monthEvent={formatDate(cardevent.acf.data, "month")}
                      yearEvent={formatDate(cardevent.acf.data, "year")}
                      hour={cardevent.acf.hora}
                      status="today"
                    />
                  );
                })
                .reverse()}
            </>
          )}
          <div className="group-events">
            <div className="title-session color-purple">
              <h2>Próximos eventos</h2>
            </div>
            {nextEvent
              .map((cardevent) => {
                let address = `
                ${cardevent.acf.rua}, 
                ${cardevent.acf.numero} 
                ${cardevent.acf.complemento} 
                ${cardevent.acf.bairro}
                `;
                let addressPlace = `
                ${cardevent.acf.cidade} 
                ${cardevent.acf.estado} 
                `;
                return (
                  <EventCard
                    key={cardevent.id}
                    eventid={cardevent.id}
                    event={cardevent.acf.nome_do_evento}
                    address={address}
                    addressPlace={addressPlace}
                    dayEvent={formatDate(cardevent.acf.data, "day")}
                    monthEvent={formatDate(cardevent.acf.data, "month")}
                    yearEvent={formatDate(cardevent.acf.data, "year")}
                    hour={cardevent.acf.hora}
                  />
                );
              })
              .reverse()}
          </div>
          <div className="group-events">
            <div className="title-session color-pink">
              <h2>Eventos finalizados</h2>
            </div>
            {closeEvents.map((cardevent) => {
              let address = `
            ${cardevent.acf.rua}, 
            ${cardevent.acf.numero} 
            ${cardevent.acf.complemento} 
            ${cardevent.acf.bairro}
            `;
              let addressPlace = `
            ${cardevent.acf.cidade} 
            ${cardevent.acf.estado} 
            `;
              return (
                <EventCard
                  key={cardevent.id}
                  eventid={cardevent.id}
                  event={cardevent.acf.nome_do_evento}
                  address={address}
                  addressPlace={addressPlace}
                  dayEvent={formatDate(cardevent.acf.data, "day")}
                  monthEvent={formatDate(cardevent.acf.data, "month")}
                  yearEvent={formatDate(cardevent.acf.data, "year")}
                  hour={cardevent.acf.hora}
                  status="finish"
                />
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
