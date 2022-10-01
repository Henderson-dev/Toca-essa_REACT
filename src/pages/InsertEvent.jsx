import React from "react";
import FormNewEvent from "../components/FormNewEvent";
import Header from "../components/Header";
import HeroPage from "../components/HeroPage";

export default function InsertEvent() {
  return (
    <>
      <Header status="logado"></Header>
      <HeroPage title="Novo Evento"></HeroPage>
      <FormNewEvent></FormNewEvent>
    </>
  );
}
