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
  status,
}) {
  return (
    <>
      <article className="card-event card">
        {status === "finish" ? (
          <>
            <Link
              to={`/dashboard/evento-realizado/${eventid}`}
              className="stretched-link"
            ></Link>
          </>
        ) : (
          <>
            <Link
              to={`/dashboard/show-evento/${eventid}`}
              className="stretched-link"
            ></Link>
          </>
        )}
        <Row>
          <div className="col-md-6 box-event-details">
            <h2>{event}</h2>
            <p>{address}</p>
            <p>{addressPlace}</p>
          </div>

          {status === "today" && (
            <div className="col-md-3 d-flex align-items-center">
              <div className="bto-start">
                <Link to="/novo-evento">Iniciar evento</Link>
              </div>
            </div>
          )}

          <div className="box-date">
            <h2>
              {dayEvent} {monthEvent}
            </h2>
            <h3>{yearEvent}</h3>
            <span>{hour} hs</span>
          </div>
        </Row>
      </article>
    </>
  );
}
