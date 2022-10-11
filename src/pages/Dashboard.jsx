import React from "react";
import EventCard from "../components/EventCard";
import Header from "../components/Header";
import HeroPage from "../components/HeroPage";
import useFetch from "../backend/useFetch";
import MensageScreen from "../components/MensageScreen";
import { Container } from "react-bootstrap";

export default function Dashboard() {
  // Call API page ID in Wordpress
  let pathApiData = "evento/";

  let dataFromPage = "wp-json/wp/v2/" + pathApiData;
  const { data: pageData, error, isLoad } = useFetch(dataFromPage);
  //console.log(pageData);

  function formatDate(dt, prop) {
    let eventMonth = "";
    let nameMonth = "";
    let eventDay = "";
    let eventYear = "";

    if (dt) {
      eventMonth = dt.substr(3, 2);
      eventDay = dt.substr(0, 2);
      eventYear = dt.substr(6, 4);

      switch (eventMonth) {
        case "01":
          nameMonth = "JAM";
          break;
        case "09":
          nameMonth = "SET";
          break;
        case "10":
          nameMonth = "OUT";
          break;
        default:
          nameMonth = "";
      }
    }
    if (prop === "month") {
      return nameMonth;
    } else if (prop === "day") {
      return eventDay;
    } else if (prop === "year") {
      return eventYear;
    } else {
      return [eventDay, nameMonth, eventYear];
    }
  }

  return isLoad === true ? ( // Aguardando carregamento
    <>
      <Header status="logado"></Header>
      <MensageScreen msg="Carregando..." />
    </>
  ) : // Caso tenha erro na chamada da API
  error ? (
    <>
      <Header status="logado"></Header>
      <MensageScreen msg="Sem conexão com a API" error={error.response} />
    </>
  ) : (
    <>
      <Header status="logado"></Header>
      <HeroPage title="Próximos eventos"></HeroPage>
      <section className="list-events">
        <Container>
        {pageData
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
        </Container>
      </section>
    </>
  );
}
