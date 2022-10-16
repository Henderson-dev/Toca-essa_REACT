import React from "react";
import EventCard from "../components/EventCard";
import Header from "../components/Header";
import HeroPage from "../components/HeroPage";
import useFetch from "../backend/useFetch";
import MensageScreen from "../components/MensageScreen";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function Dashboard() {
  // Pega o id do evento na url
  const { id } = useParams();
  const idArtist = { id };

  // Call API page ID in Wordpress filter by id artist
  let pathApiData = "evento?idartist=" + idArtist.id;

  let dataFromPage = "wp-json/wp/v2/" + pathApiData;
  const { data: pageData, error, isLoad } = useFetch(dataFromPage);
  //console.log(pageData);

  // Formata data para o formato PT-BR
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

        case "02":
          nameMonth = "FEV";
          break;

        case "03":
          nameMonth = "MAR";
          break;

        case "04":
          nameMonth = "ABR";
          break;

        case "05":
          nameMonth = "MAI";
          break;

        case "06":
          nameMonth = "JUN";
          break;

        case "07":
          nameMonth = "JUL";
          break;

        case "08":
          nameMonth = "AGO";
          break;

        case "09":
          nameMonth = "SET";
          break;

        case "10":
          nameMonth = "OUT";
          break;

        case "11":
          nameMonth = "NOV";
          break;

        case "12":
          nameMonth = "DEZ";
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
