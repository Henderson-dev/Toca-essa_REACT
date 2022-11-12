import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function ModalEventClosed(props) {
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
          <h3>
            {props.eventName}
          </h3>
          <p>
            O evento está encerrado!
          </p>
        </div>
      </Modal.Body>
    </Modal>
  )
}
