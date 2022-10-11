import { useState, useEffect } from "react";
import axios from "axios";

// Cria a chamada do Axios definindo a base da URL
const BACK_END_URL = axios.create({
  baseURL: "https://artesplasticas.art.br/_react_backend/toca_essa/",
});

export default function useFetch(url) {
  // para armazenar os dados vindos da API
  const [data, setData] = useState(null);
  // Para monitorar quando a API estiver trabalhando e carregando os dados
  const [isLoad, setIsLoad] = useState(true);
  // Armazena o erro se acontecer
  const [error, setError] = useState(null);

  useEffect(() => {
    // Executa a chamada na API a cada 30 segundos
    //let interval = setInterval(() => {
      BACK_END_URL.get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setIsLoad(false);
        });
    //}, 30000);
  }, [url]);
  return { data, error, isLoad };
}
