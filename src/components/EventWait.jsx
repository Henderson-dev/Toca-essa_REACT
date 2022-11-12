import React from "react";
import { ScaleLoader } from "react-spinners";
import { Container, Row } from "reactstrap";

export default function EventWait({ artist, event, datevent, hourevent }) {
  return (
    <section className="event-close">
      <Container>
        <Row>
          <div className="col-12 text-center">
            <ScaleLoader color="#ffffff" height={45} />
            <h3>Aguarde...</h3>
            <p>Em breve você vai poder pedir suas músicas preferidas!</p>
            <h1>{artist}</h1>
            <h2>{event}</h2>
            <span>Data: {datevent}</span>
            <span>Hora: {hourevent}</span>
          </div>
        </Row>
      </Container>
    </section>
  );
}
