import React from "react";
import EventCard from "../components/EventCard";
import Header from "../components/Header";
import HeroPage from "../components/HeroPage";
import useFetch from "../backend/useFetch";
import MensageScreen from "../components/MensageScreen";

export default function Dashboard() {
  // Call API page ID in Wordpress
  let pathApiData = "evento/";

  let dataFromPage = "wp-json/wp/v2/" + pathApiData;
  const { data: pageData, error, isLoad } = useFetch(dataFromPage);
  //console.log(pageData);

  function formatDate(dt) {
    let eventMonth = "";
    let nameMonth = "";
    let eventDay = "";
    let eventYear = "";

    if (dt) {
      eventMonth = dt.substr(3, 2);
      eventDay = dt.substr(0, 2);
      eventYear = dt.substr(6, 4);

      console.log(dt + " -  ");
      console.log(eventYear);

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
    return nameMonth;
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
        {pageData
          .map((cardevent) => {
            return (
              <EventCard
                key={cardevent.id}
                eventid={cardevent.id}
                event={cardevent.acf.nome_do_evento}
                dateEvent={formatDate(cardevent.acf.data)}
                hour={cardevent.acf.hora}
              />
            );
          })
          .reverse()}
      </section>
      <section className="list-events">
        <EventCard></EventCard>
      </section>
    </>
  );
}
