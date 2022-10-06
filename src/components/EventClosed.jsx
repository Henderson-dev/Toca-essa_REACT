import React from "react";

export default function EventClosed({ artist, event, datevent, hourevent }) {
  return (
    <section className="event-close">
      <h1>{artist}</h1>
      <h2>{event}</h2>
      <span>data: {datevent}</span>
      <span>hora: {hourevent}</span>
      <h3>Evento encerrado</h3>
    </section>
  );
}
