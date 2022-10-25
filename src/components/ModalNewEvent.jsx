import React from "react";
import Modal from "react-bootstrap/Modal";

export default function ModalNewEvent(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="modal-event">
          <h2>Evento</h2>
          <h3 className="text-center">
            {props.nameevent} <br></br> {props.artist}
          </h3>
          <p>
            Evento criado <br></br>com sucesso !
          </p>
          <h4 className="text-center">Código do evento</h4>
          <span className="cod-event">{props.codevent}</span>
        </div>
      </Modal.Body>
    </Modal>
  );
}
