import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HeroPage({ title }) {
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
            <div className="col-md-6 d-flex flex-column align-items-end justify-content-center">
              <h2>Bem vindo</h2>
              <span>Michael Lenon</span>
              <Link to="/novo-evento">Criar evento</Link>
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
