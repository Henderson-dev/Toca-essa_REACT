import { React, useState } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { rootPath, pathsApi } from "../backend/usePaths";

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
  const [statusAction, setStatusAction] = useState("");

  // Define o caminho do endpoint de inserção de evento no back-end
  const routeAPI = rootPath + pathsApi[1].route;

  async function startEvent(idevent) {

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
          window.location.href = "/dashboard/show-evento/" + idevent;
        } else {
          setStatusAction("erro");
        }
      });
    } catch (err) {
      setStatusAction("erro");
      //console.log(err);
    }
  }

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
                <span
                  className="bto-start-event"
                  onClick={() => {
                    startEvent(eventid);
                  }}
                >
                  Iniciar evento
                </span>
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
