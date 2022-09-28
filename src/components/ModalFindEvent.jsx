import {React, useState}  from 'react'
import Modal from 'react-bootstrap/Modal';


export default function ModalFindEvent(props) {

  const [showGeoloc, setshowGeoloc] = useState(false);
  const showOrHideGeoloc = () => setshowGeoloc(true);

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

      { showGeoloc ?
      
      <>
        <p>Pela geo</p>
        <button onClick={showOrHideGeoloc}>Voltar</button>
      </>
      
      : 

      <div className="form-default">
        <div className="wrap-check">
          <div className="check-form">
            <label onClick={showOrHideGeoloc}>
              <input
                type="radio"
                name="localizacao"
              />
              <span className="wpcf7-list-item-label">
                  Pela minha geolocalização
              </span>
            </label>
            <label>
              <input
                type="radio"
                name="localizacao"
              />
              <span className="wpcf7-list-item-label">
                Pelo código do evento
              </span>
            </label>
            <label>
              <input
                type="radio"
                name="localizacao"
              />
              <span className="wpcf7-list-item-label">
                Pelo nome do artista ou banda
              </span>
            </label>
            
          </div>
        </div>
      </div>
       }
      </Modal.Body>
    </Modal>
  )
}
