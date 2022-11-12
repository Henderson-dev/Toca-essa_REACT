import { React, useState } from "react";
import { differenceInHours } from "date-fns";
import ModalCommentEvent from "./ModalCommentEvent";
import { Container, Row } from "reactstrap";

export default function EventClosed({
  artist,
  event,
  datevent,
  hourevent,
  dateClose,
  idEvent,
}) {
  const [modalShow, setModalShow] = useState(false);

  // Pega data e hora de encerramento do evento
  const dateClosed = new Date(dateClose);

  // Pega a diferença entre hora de encerramento e a hora atual
  const hourDiference = differenceInHours(dateClosed, new Date());

  let commetEvent = 0;

  // Verifica se a quantiade de horas passadas é menor ou igual a 2 horas
  if (Math.abs(hourDiference) <= 2) {
    // pode fazer comentários
    commetEvent = 1;
  } else {
    // não pode mais fazer comentários
    commetEvent = 0;
  }

  return (
    <>
      <section className="event-close">
        <Container>
          <Row>
            <div className="col-12 text-center">
              <h1>{artist}</h1>
              <h2>{event}</h2>
              <span>data: {datevent}</span>
              <span>hora: {hourevent}</span>
              <h3>Evento encerrado</h3>
            </div>
          </Row>
        </Container>
      </section>
      <ModalCommentEvent
        show={commetEvent === 1 && (() => setModalShow(true))}
        onHide={() => setModalShow(false)}
        artist={artist}
        eventName={event}
        idEvent={idEvent}
      ></ModalCommentEvent>
    </>
  );
}
