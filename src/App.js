import React from "react";
//import "./App.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
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
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/como-funciona" element={<About />} />
          <Route path="/meus-dados" element={<MyCadastre />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/novo-evento/:id" element={<InsertEvent />} />
          <Route path="/dashboard/show-evento/:id" element={<EventArtist />} />
          <Route path="/evento/:id" element={<EventPublic />} />
          <Route
            path="/dashboard/evento-realizado/:id"
            element={<ArtistAferEvent />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}
export default App;
