import React from "react";
import './App.css';
import useFetch from "./backend/useFetch";
import MensageScreen from "./components/MensageScreen";
//import { Container } from 'reactstrap';

function App(props) {

  // Call API page ID in Wordpress
  let pathApiData = "evento/36";

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
      <div>
        <h1>Api carregada com sucesso</h1>
      </div>
    </>
  );
}

export default App;