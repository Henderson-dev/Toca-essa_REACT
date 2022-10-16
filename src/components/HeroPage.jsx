import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import formatDate from "../funtions/DateFormat";

export default function HeroPage({
  title,
  nameArtist,
  goback,
  idArtist,
  nameEvent,
  dataEvent,
}) {
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
                    <span>Evento</span>
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
                    ) : (
                      <Link
                        to={`/novo-evento/${idArtist}`}
                        className="btn-hero"
                      >
                        Criar evento
                      </Link>
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
