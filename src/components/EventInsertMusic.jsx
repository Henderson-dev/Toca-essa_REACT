import { React, useState, useRef } from "react";
import { Container, Row } from "reactstrap";
import { rootPath, pathsApi } from "../backend/usePaths";

export default function EventInsertMusic({ idevento }) {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef(null);

  // Define o caminho do endpoint de inserção de pedidos no evento
  const routeAPI = rootPath + pathsApi[2].route;

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
      <section className="hero-do-music">
        <Container>
          <Row>
            <div className="col-lg-4"></div>
            <div className="col-lg-7">
              <h1>Bem vindo</h1>
              <p>Apresentação Jonh Cover Lenon</p>
              <div className="box-adress">
                <h2>Birosca Bar</h2>
                <p>Rua Almicar de Castro, 886 Pampulha - Belo Horizonte - MG</p>
              </div>
              <div className="form-do-music">
                <h2>
                  Qual música<br></br>gostaria de escutar<br></br>hoje?
                </h2>
                <form ref={form} onSubmit={handleSubmit}>
                  <input type="hidden" name="id_evento" value={idevento} />
                  <label htmlFor="nome_musica">
                    <textarea
                      name="nome_musica"
                      placeholder="Digite aqui o nome da música..."
                      required
                    ></textarea>
                  </label>
                  <div className="box-artist">
                    <label htmlFor="nome_artista">
                      <h2>Qual artista ou banda ?</h2>
                      <input type="text" name="nome_artista" required />
                    </label>
                    <input
                      type="submit"
                      value="Enviar"
                      className="form-right"
                    />
                  </div>
                  <div className="box-mensage">
                    {message === "loading" && (
                      <div className="box-msg">
                        <img src="../../assets/images/preloader.gif"></img>
                        <p>Enviando seu pedido...</p>
                      </div>
                    )}
                    {status === "ok" && <p>Sucesso!!</p>}
                    {status === "erro" && <p>Erro, tente mais tarde!!</p>}
                  </div>
                </form>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}
