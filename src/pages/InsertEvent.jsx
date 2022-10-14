import React from "react";
import FormNewEvent from "../components/FormNewEvent";
import Header from "../components/Header";
import HeroPage from "../components/HeroPage";
import SetlistGroup from "../components/SetlistGroup";

export default function InsertEvent() {
  return (
    <>
      <Header status="logado" dashboard="true"></Header>
      <HeroPage title="Novo Evento" nameArtist="Michael Lenon" goback={true}></HeroPage>
      <FormNewEvent></FormNewEvent>
      <SetlistGroup page="newevent" title="Setlist do evento"></SetlistGroup>
    </>
  );
}
