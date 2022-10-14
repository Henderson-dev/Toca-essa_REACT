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
        <Link to={`/dashboard/${eventid}/show-evento/${eventid}`}>
          <Row>
            <div className="box-event-details">
              <h2>{event}</h2>
              <p>{address}</p>
              <p>{addressPlace}</p>
            </div>

            <div className="col-md-3">
              <div className="bto-start">
                {/* <Link to="/novo-evento">Iniciar evento</Link> */}
              </div>
            </div>

            <div className="box-date">
              <h2>
                {dayEvent} {monthEvent}
              </h2>
              <h3>{yearEvent}</h3>
              <span>{hour} hs</span>
            </div>
          </Row>
        </Link>
      </article>
    </>
  );
}
