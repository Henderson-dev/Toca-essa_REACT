import { useState, useEffect } from "react";
import axios from "axios";

// Cria a chamada do Axios definindo a base da URL
const BACK_END_URL = axios.create({
  baseURL: "https://artesplasticas.art.br/_react_backend/toca_essa/",
});

export default function useData(url) {
  // para armazenar os dados vindos da API
  const [data, setData] = useState(null);
  // Para monitorar quando a API estiver trabalhando e carregando os dados
  const [isLoad, setIsLoad] = useState(true);
  // Armazena o erro se acontecer
  const [error, setError] = useState(null);
  const [todayEvent, setTodayEvent] = useState(null);
  const [nextEvent, setNextEvent] = useState(null);
  const [closeEvents, setCloseEvents] = useState(null);

  // Função que retorna a data atual
  function currentDate() {
    const dataToday = new Date();
    const dateDay = String(dataToday.getDate()).padStart(2, "0");
    const dateMonth = String(dataToday.getMonth() + 1).padStart(2, "0");
    const dateYear = dataToday.getFullYear();
    const today = dateDay + "/" + dateMonth + "/" + dateYear;
    return today;
  }

  // Filtra eventos com a data do dia
  function getEventToday(dataEv) {
    if (dataEv) {
      const curDate = currentDate();
      const todayEvent = dataEv.filter(
        (listEvent) => listEvent.acf.data.toLowerCase() === curDate
      );
      return setTodayEvent(todayEvent);
    }
  }

  // Filtra próximos eventos retirando os eventos do dia
  function getEventLessToday(dataEv) {
    if (dataEv) {
      const curDate = currentDate();
      const nextEvent = dataEv
        .filter((listEvent) => listEvent.acf.data.toLowerCase() !== curDate)
        .filter((closeEvent) => closeEvent.acf.evento_encerrado === false);
      return setNextEvent(nextEvent);
    }
  }

  // Filtra pelos eventos encerrados
  function getClosedEvents(dataEv) {
    if (dataEv) {
      const closeEvent = dataEv.filter(
        (listEvent) => listEvent.acf.evento_encerrado === true
      );
      return setCloseEvents(closeEvent);
    }
  }

  useEffect(() => {
    // Executa a chamada na API a cada 30 segundos
    //let interval = setInterval(() => {
    BACK_END_URL.get(url)
      .then((response) => {
        setData(response.data);
        getEventToday(response.data);
        getEventLessToday(response.data);
        getClosedEvents(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoad(false);
      });
    //}, 30000);
  }, [url]);
  return { data, todayEvent, nextEvent, closeEvents, error, isLoad };
}
