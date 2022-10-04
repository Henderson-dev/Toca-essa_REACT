import React from "react";
import EventInsertMusic from "../components/EventInsertMusic";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

export default function EventPublic() {
  // Pega o id do evento na url
  const { id } = useParams();

  return (
    <>
      <Header status=""></Header>
      <EventInsertMusic idevento={id}></EventInsertMusic>
    </>
  );
}
