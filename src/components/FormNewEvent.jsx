import { React, useState, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import { rootPath, pathsApi } from "../backend/usePaths";

export default function FormNewEvent() {
  //const [artist, setArtist] = useState("Creedance Cover");
  //let artist = "Creedance Cover";
  // const [nome_evento, setName] = useState("");
  // const [telefone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef(null);

  // Define o caminho do endpoint de inserção de evento no back-end
  const routeAPI = rootPath + pathsApi[0].route;

  let handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    //form.submit();
    setMessage("loading");
    try {
      let res = await fetch(routeAPI, {
        method: "POST",
        body: data,
      }).then((response) => {
        console.log(response);
        if (response.status === 200) {
          setStatus("ok");
        } else {
          setStatus("erro");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="form-new-event form-default">
        <form ref={form} onSubmit={handleSubmit}>
          <input type="hidden" name="artista" value="Creedance Cover" />

          {status === "" && (
            <Container>
              <Row>
                <div className="col-lg-12">
                  <label htmlFor="nome_evento" className="d-flex flex-column">
                    Nome do evento
                    <input type="text" name="nome_evento" required />
                  </label>
                </div>
                <div className="col-lg-12">
                  <label htmlFor="telefone" className="d-flex flex-column">
                    Telefone
                    <input type="text" name="telefone" required />
                  </label>
                </div>
                <div className="col-lg-12">
                  <input type="submit" value="Enviar"></input>
                  <div className="message">
                    {message === "loading" && <p>Enviando</p>}
                  </div>
                </div>
              </Row>
            </Container>
          )}
          {status === "ok" && <p>Sucesso!!</p>}
          {status === "erro" && <p>Erro, tente mais tarde!!</p>}
        </form>
      </section>
    </>
  );
}