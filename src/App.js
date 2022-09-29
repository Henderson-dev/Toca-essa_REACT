import React from "react";
import "./App.css";
import useFetch from "./backend/useFetch";
import MensageScreen from "./components/MensageScreen";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import MyCadastre from "./pages/MyCadastre";
import InsertEvent from "./pages/InsertEvent";
import EventArtist from "./pages/EventArtist";
import EventPublic from "./pages/EventPublic";
import ArtistAferEvent from "./pages/ArtistAferEvent";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

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
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/como-funciona" element={<About />} />
          <Route path="/meus-dados" element={<MyCadastre />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/novo-evento" element={<InsertEvent />} />
          <Route path="/show-evento/:id" element={<EventArtist />} />
          <Route path="/evento/:id" element={<EventPublic />} />
          <Route path="/evento-realizado/:id" element={<ArtistAferEvent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
