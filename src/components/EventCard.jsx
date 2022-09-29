import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function EventCard({ title, address, date, hour }) {
  return (
    <>
      <article className="card-event">
        <Container>
          <Row>
            <div className="col-md-7">
              <h2>Biroca Bar</h2>
              <p>Rua Almicar de Castro, 886 Pampulha Belo Horizonte - MG</p>
            </div>
            <div className="col-md-3">
              <div className="bto-start">
                <Link to="/novo-evento">Iniciar evento</Link>
              </div>
            </div>
            <div className="col-md-2">
              <div className="box-date">
                <span>15 nov</span>
                <span>2022</span>
                <span>20:30 hs</span>
              </div>
            </div>
          </Row>
        </Container>
      </article>
    </>
  );
}
