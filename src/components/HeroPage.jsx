import {React, useState} from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import formatDate from "../funtions/DateFormat";
import { rootPath, pathsApi } from "../backend/usePaths";

export default function HeroPage({
  idevent,
  title,
  nameArtist,
  goback,
  idArtist,
  nameEvent,
  dataEvent,
  startEvent,
  closeEvent,
}) {

  const [statusAction, setStatusAction] = useState("");

  // Define o caminho do endpoint de inserção de evento no back-end
  const routeAPI = rootPath + pathsApi[4].route;

  async function closeThisEvent(idevent) {

    // Inicia varial que vai armazenar os dados do formulário
    const dataEvent = new FormData();
    // Set no id do evento
    dataEvent.append("id_evento", idevent);

    try {
      let res = await fetch(routeAPI, {
        method: "POST",
        body: dataEvent,
      }).then((response) => {
        console.log(response);
        if (response.status === 200) {
          setStatusAction("ok");
          window.location.href = "/dashboard/evento-realizado/" + idevent;
        } else {
        }
      });
    } catch (err) {
      setStatusAction("erro");
    }
  }

  return (
    <>
      <section className="hero-page">
        <Container>
          <Row>
            <div className="col-md-3">
              <img
                src="../../assets/images/logo_toca-essa-small.png"
                alt="Toca Essa"
                className="logo-internal"
              />
            </div>
            {nameEvent ? (
              <>
                <div className="col-md-9 d-flex flex-row align-items-end justify-content-end">
                  <div className="box-event-data">
                    <span>
                      Evento{startEvent === true && " em andamento"}
                      {closeEvent === true && " realizado"}
                    </span>
                    <div className="box-info">
                      <h3>{nameEvent}</h3>
                      {formatDate(dataEvent.data, "day")}
                      {formatDate(dataEvent.data, "month")}
                      {formatDate(dataEvent.data, "year")}
                      {dataEvent.hora} hs
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-end justify-content-end">
                    <h2>Bem vindo</h2>
                    <span>{nameArtist}</span>
                    {goback === true ? (
                      <Link to={`/dashboard/${idArtist}`} className="btn-hero">
                        Voltar
                      </Link>
                    ) : startEvent === true ? (
                      <>
                        <Link
                          to=""
                          className="btn-hero"
                          onClick={() => {
                            closeThisEvent(idevent);
                          }}
                        >
                          Encerrar evento
                        </Link>
                      </>
                    ) : startEvent === false ? (
                      <>
                        <Link
                          to={`/novo-evento/${idArtist}`}
                          className="btn-hero"
                        >
                          Iniciar evento
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          to={`/novo-evento/${idArtist}`}
                          className="btn-hero"
                        >
                          Criar evento
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-9 d-flex flex-column align-items-end justify-content-end">
                  <h2>Bem vindo</h2>
                  <span>{nameArtist}</span>
                  {goback === true ? (
                    <Link to={`/dashboard/${idArtist}`} className="btn-hero">
                      Voltar
                    </Link>
                  ) : (
                    <Link to={`/novo-evento/${idArtist}`} className="btn-hero">
                      Criar evento
                    </Link>
                  )}
                </div>
              </>
            )}
          </Row>
          <div className="box-title-hero">
            <h1>{title}</h1>
          </div>
        </Container>
      </section>
    </>
  );
}
