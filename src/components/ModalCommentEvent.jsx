import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { rootPath, pathsApi } from "../backend/usePaths";

export default function ModalCommentEvent(props) {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  // Define o caminho do endpoint de inserção de evento no back-end
  const routeAPI = rootPath + pathsApi[5].route;

  async function sendCommentAfterEvent() {

    // Inicia varial que vai armazenar os dados do formulário
    const dataEvent = new FormData();
    // Set no id do evento
    dataEvent.append("id_evento", props.idEvent);
    dataEvent.append("nome", document.querySelector("#nome_publico").value);
    dataEvent.append("e-mail", document.querySelector("#email_publico").value);
    dataEvent.append("comentario", document.querySelector("#mensagem_publico").value);

    try {
      let res = await fetch(routeAPI, {
        method: "POST",
        body: dataEvent,
      }).then((response) => {
        console.log(response);
        if (response.status === 200) {
          setStatus("ok");
        } else {
          setStatus("erro");
        }
      });
    } catch (err) {
      setStatus("erro");
      //console.log(err);
    }
  }

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
            {props.eventName} • {props.artist}
          </h3>
          <p>
            O evento está encerrado,<br></br>agradecemos sua participação.
          </p>
          <h4>Deixe seu comentário</h4>
        </div>
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
              {/* <button
                onClick={() => {
                  sendCommentAfterEvent();
                }}
                className="form-right"
              >
                Ok
              </button> */}
              <input type="submit" value="ok" className="form-right" />
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
