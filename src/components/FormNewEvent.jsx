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
                <div className="col-lg-4">
                  <label htmlFor="date_evento" className="d-flex flex-column">
                    Data do envento
                    <input type="date" name="date_evento" required />
                  </label>
                </div>
                <div className="col-lg-4">
                  <label
                    htmlFor="horario_evento"
                    className="d-flex flex-column"
                  >
                    Horário do evento
                    <input
                      type="time"
                      name="horario_evento"
                      placeholder="hh:mm"
                      required
                    />
                  </label>
                </div>
                <div className="col-lg-4">
                  <label
                    htmlFor="duracao_evento"
                    className="d-flex flex-column"
                  >
                    Duração da apresentação
                    <input
                      type="time"
                      name="duracao_evento"
                      placeholder="hh:mm"
                      required
                    />
                  </label>
                </div>
                <div className="col-lg-12">
                  <label htmlFor="nome_local" className="d-flex flex-column">
                    Local / Nome do estabelcimento
                    <input type="text" name="nome_local" required />
                  </label>
                </div>
                <div className="col-lg-12">
                  <label htmlFor="rua" className="d-flex flex-column">
                    Rua / Avenida
                    <input type="text" name="rua" required />
                  </label>
                </div>
                <div className="col-lg-4">
                  <label htmlFor="numero" className="d-flex flex-column">
                    Número
                    <input type="text" name="numero" required />
                  </label>
                </div>
                <div className="col-lg-8">
                  <label htmlFor="complemento" className="d-flex flex-column">
                    Complemento
                    <input type="text" name="complemento" required />
                  </label>
                </div>
                <div className="col-lg-8">
                  <label htmlFor="bairro" className="d-flex flex-column">
                    Bairro
                    <input type="text" name="bairro" required />
                  </label>
                </div>
                <div className="col-lg-4">
                  <label htmlFor="cep" className="d-flex flex-column">
                    Cep
                    <input type="text" name="cep" required />
                  </label>
                </div>
                <div className="col-lg-8">
                  <label htmlFor="cidade" className="d-flex flex-column">
                    Cidade
                    <input type="text" name="cidade" required />
                  </label>
                </div>
                <div className="col-lg-4">
                  <label htmlFor="estado" className="d-flex flex-column">
                    Estado
                    <input type="text" name="estado" required />
                  </label>
                </div>
                <div className="col-lg-12">
                  <input
                    type="submit"
                    value="Enviar"
                    className="form-right"
                  ></input>
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
