import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function HeroPage({ title, nameArtist, goback }) {
  // Pega o id do evento na url
  const { id } = useParams();
  const idArtist = { id };

  return (
    <>
      <section className="hero-page">
        <Container>
          <Row>
            <div className="col-md-6">
              <img
                src="../../assets/images/logo_toca-essa-small.png"
                alt="Toca Essa"
                className="logo-internal"
              />
            </div>
            <div className="col-md-6 d-flex flex-column align-items-end justify-content-end">
              <h2>Bem vindo</h2>
              <span>{nameArtist}</span>
              {goback === true ? (
                <Link to={`/dashboard/${idArtist.id}`} className="btn-hero">
                  Voltar
                </Link>
              ) : (
                <Link to={`/novo-evento/${idArtist.id}`} className="btn-hero">
                  Criar evento
                </Link>
              )}
            </div>
          </Row>
          <div className="box-title-hero">
            <h1>{title}</h1>
          </div>
        </Container>
      </section>
    </>
  );
}
