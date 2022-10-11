import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function EventCard({
  eventid,
  event,
  address,
  dateEvent,
  hour,
}) {
  return (
    <>
      <article className="card-event">
        <Link to={`show-evento/${eventid}`}>
          <Container>
            <Row>
              <div className="col-md-7">
                <h2>{event}</h2>
                <p>Rua Almicar de Castro, 886 Pampulha Belo Horizonte - MG</p>
              </div>
              <div className="col-md-3">
                <div className="bto-start">
                  <Link to="/novo-evento">Iniciar evento</Link>
                </div>
              </div>
              <div className="col-md-2">
                <div className="box-date">
                  <span>{dateEvent}</span>
                  <span>---</span>
                  <span>{hour} hs</span>
                </div>
              </div>
            </Row>
          </Container>
        </Link>
      </article>
    </>
  );
}
