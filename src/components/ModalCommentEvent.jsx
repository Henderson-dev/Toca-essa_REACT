import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { rootPath, pathsApi } from "../backend/usePaths";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function ModalCommentEvent(props) {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  // Define o caminho do endpoint de inserção de evento no back-end
  const routeAPI = rootPath + pathsApi[5].route;

  async function sendCommentAfterEvent() {

    setMessage("loading");

    // Inicia variavel que vai armazenar os dados do formulário
    const dataEvent = new FormData();
    // Set no id do evento
    dataEvent.append("id_evento", props.idEvent);
    dataEvent.append("nome", document.querySelector("#nome_publico").value);
    dataEvent.append("e-mail", document.querySelector("#email_publico").value);
    dataEvent.append(
      "comentario",
      document.querySelector("#mensagem_publico").value
    );

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
        {status === "ok" ? (
          <>
          <div className="msg-modal text-center">
            <p>Mensagem enviada com sucesso !</p>
            <p>Obrigado</p>
          </div>
          </>
        ) : (
          <>
            <div className="form-default">

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
                  <label
                    htmlFor="mensagem_publico"
                    className="d-flex flex-column"
                  >
                    Sua mensagem
                    <textarea
                      id="mensagem_publico"
                      name="mensagem_publico"
                      required
                    ></textarea>
                  </label>
                  <button
                    onClick={() => {
                      sendCommentAfterEvent();
                    }}
                    className="form-right btn-purple"
                  >
                    Ok
                  </button>
                  {message === "loading" && (
                      <div className="box-msg">
                        <ScaleLoader color="#A0168F" height={30} />
                        <p>Enviando sua mensagem...</p>
                      </div>
                    )}
            </div>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
}
