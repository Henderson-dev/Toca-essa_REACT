import { React, useState } from "react";
import { differenceInHours } from "date-fns";
import ModalFindEvent from "./ModalFindEvent";
import ModalCommentEvent from "./ModalCommentEvent";

export default function EventClosed({
  artist,
  event,
  datevent,
  hourevent,
  dateClose,
}) {
  const [modalShow, setModalShow] = useState(false);
  const [comment, setComment] = useState(false);
  //const [openModal, setOpenModal] = useState({ isOpen: false });

  // Pega data e hora de encerramento do evento
  const dateClosed = new Date(dateClose);
  console.log(dateClosed);
  // https://date-fns.org/
  // Pega a diferença entre hora de encerramento e a hora atual
  const hourDiference = differenceInHours(dateClosed, new Date());

  let commetEvent = 0;

  // Verifica se a quantiade de horas passadas é menor ou igual a 2 horas
  if (Math.abs(hourDiference) <= 2) {
    console.log("pode comentar");
    //setComment(true);
    //setModalShow(true);
    commetEvent = 1;
  } else {
    console.log("Não pode comentar");
    //setComment(false);
    commetEvent = 0;
  }

  return (
    <>
      <section className="event-close">
        <h1>{artist}</h1>
        <h2>{event}</h2>
        <span>data: {datevent}</span>
        <span>hora: {hourevent}</span>
        <h3>Evento encerrado</h3>
      </section>
      <ModalCommentEvent
        show={commetEvent === 1 && (() => setModalShow(true))}
        onHide={() => setModalShow(false)}
        artist={artist}
        eventName={event}
      ></ModalCommentEvent>
    </>
  );
}
