import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function EventCard({
  eventid,
  event,
  address,
  addressPlace,
  dayEvent,
  monthEvent,
  yearEvent,
  hour,
}) {
  return (
    <>
      <article className="card-event">
        <Link to={`show-evento/${eventid}`}>
            <Row>
              <div className="col-md-7">
                <h2>{event}</h2>
                <p>{address}</p>
                <p>{addressPlace}</p>
              </div>
              <div className="col-md-3">
                <div className="bto-start">
                  {/* <Link to="/novo-evento">Iniciar evento</Link> */}
                </div>
              </div>
              <div className="col-md-2">
                <div className="box-date">
                  <span>{dayEvent} {monthEvent}</span>
                  <span>{yearEvent}</span>
                  <span>{hour} hs</span>
                </div>
              </div>
            </Row>
        </Link>
      </article>
    </>
  );
}
