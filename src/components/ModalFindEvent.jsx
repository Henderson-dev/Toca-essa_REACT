import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function ModalFindEvent(props) {
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
      <div className="form-default">
        <div className="wrap-check">
          <div className="check-form">
            <label>
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
      </Modal.Body>
    </Modal>
  )
}
