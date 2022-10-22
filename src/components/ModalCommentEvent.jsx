import { React } from "react";
import Modal from "react-bootstrap/Modal";

export default function ModalCommentEvent(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h2>Evento</h2>
        <h3>{props.eventName} | {props.artist}</h3>
        <p>O evento está encerrado, agradecemos sua participação.</p>
        <h4>Deixe seu comentário</h4>
        <div className="form-default">
          <div className="wrap-check">
            <div className="check-form">
              <label htmlFor="nome_publico" className="d-flex flex-column">
                Seu nome
                <input
                  type="text"
                  id="nome_publico"
                  name="nome_publico"
                  required
                />
              </label>
              <label htmlFor="email_publico" className="d-flex flex-column">
                Seu e-mail
                <input
                  type="text"
                  id="email_publico"
                  name="email_publico"
                  required
                />
              </label>
              <label htmlFor="mensagem_publico" className="d-flex flex-column">
                Sua mensagem
                <textarea
                  id="mensagem_publico"
                  name="mensagem_publico"
                  required
                ></textarea>
              </label>
              <input type="submit" value="ok" className="form-right" />
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
