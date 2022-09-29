import React from "react";
import "./App.css";
import useFetch from "./backend/useFetch";
import MensageScreen from "./components/MensageScreen";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

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
      <BrowserRouter>
        <Header />
        <Hero></Hero>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/como-funciona" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
