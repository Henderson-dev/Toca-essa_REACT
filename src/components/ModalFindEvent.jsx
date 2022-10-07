import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";
import useFetch from "../backend/useFetch";
import { Link } from "react-router-dom";

export default function ModalFindEvent(props) {
  const [showGeoloc, setshowGeoloc] = useState(0);
  const [showCod, setshowCod] = useState(0);
  const [showArtist, setshowArtist] = useState(0);

  // Call API page ID in Wordpress
  let pathApiData = "evento/";

  let dataFromPage = "wp-json/wp/v2/" + pathApiData;
  const { data: pageData, error, isLoad } = useFetch(dataFromPage);
  console.log(pageData);

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h2>Localizar um evento</h2>

        {showGeoloc === 1 ? (
          <>
            <h3>Pela geolocalização</h3>
            {pageData.map((event) => {
              return (
                <>
                  <ul>
                    <li key={event.id}>
                      <Link to={`/evento/${event.id}`}>{event.acf.nome_do_evento}</Link>
                    </li>
                  </ul>
                </>
              );
            })}
            <button onClick={() => setshowGeoloc(0)} className="btn-default">
              Voltar
            </button>
          </>
        ) : showCod === 1 ? (
          <>
            Codigo
            <button onClick={() => setshowCod(0)} className="btn-default">
              Voltar
            </button>
          </>
        ) : showArtist === 1 ? (
          <>
            Artista
            <button onClick={() => setshowArtist(0)} className="btn-default">
              Voltar
            </button>
          </>
        ) : (
          <div className="form-default">
            <div className="wrap-check">
              <div className="check-form">
                <label onClick={() => setshowGeoloc(1)}>
                  <input type="radio" name="localizacao" />
                  <span className="wpcf7-list-item-label">
                    Pela minha geolocalização
                  </span>
                </label>
                <label onClick={() => setshowCod(1)}>
                  <input type="radio" name="localizacao" />
                  <span className="wpcf7-list-item-label">
                    Pelo código do evento
                  </span>
                </label>
                <label onClick={() => setshowArtist(1)}>
                  <input type="radio" name="localizacao" />
                  <span className="wpcf7-list-item-label">
                    Pelo nome do artista ou banda
                  </span>
                </label>
              </div>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}
