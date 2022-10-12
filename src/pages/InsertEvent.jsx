import React from "react";
import FormNewEvent from "../components/FormNewEvent";
import Header from "../components/Header";
import HeroPage from "../components/HeroPage";
import SetlistGroup from "../components/SetlistGroup";

export default function InsertEvent() {
  return (
    <>
      <Header status="logado"></Header>
      <HeroPage title="Novo Evento"></HeroPage>
      <FormNewEvent></FormNewEvent>
      <SetlistGroup page="newevent" title="Setlist do evento"></SetlistGroup>
    </>
  );
}
