import React from "react";
import { ScaleLoader } from "react-spinners";

export default function EventWait({ artist, event, datevent, hourevent }) {
  return (
    <section className="event-close">
      <ScaleLoader color="#ffffff" height={45} />
      <h3>Aguarde...</h3>
      <p>Em breve você vai poder pedir suas músicas preferidas!</p>
      <h1>{artist}</h1>
      <h2>{event}</h2>
      <span>Data: {datevent}</span>
      <span>Hora: {hourevent}</span>
    </section>
  );
}
