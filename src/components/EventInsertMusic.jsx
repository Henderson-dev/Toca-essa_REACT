import React from "react";
import { Container, Row } from "reactstrap";

export default function EventInsertMusic() {
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
                <h2>Qual música gostaria de escutar hoje?</h2>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}
