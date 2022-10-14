import React from "react";
import FormNewEvent from "../components/FormNewEvent";
import Header from "../components/Header";
import HeroPage from "../components/HeroPage";
import SetlistGroup from "../components/SetlistGroup";
import { useParams } from "react-router-dom";

export default function InsertEvent() {
  // Pega o id do evento na url
  const { id } = useParams();
  const idArtist = { id };

  return (
    <>
      <Header status="logado" dashboard="true" idArtist={idArtist.id}></Header>
      <HeroPage
        title="Novo Evento"
        nameArtist="Michael Lenon"
        goback={true}
      ></HeroPage>
      <FormNewEvent></FormNewEvent>
      <SetlistGroup
        page="newevent"
        title="Setlist do evento"
        idArtist={idArtist.id}
      ></SetlistGroup>
    </>
  );
}
