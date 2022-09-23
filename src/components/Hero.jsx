import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function Hero() {
  return (
    <section className='hero'>
      <Container>
        <Row>
          <div className="col-center">
            <div className="box-photos">
              <img src="./assets/images/logo_toca-essa.png" alt="Toca Essa" className='logo-hero' />
              <img src="./assets/images/homem_moderno.png" alt="Toca Essa" className='photo-hero' />
            </div>
            <div className="info">
              <h1>
              Suas músicas
              favoritas
              nos eventos
              </h1>
              <a href="#" className="btn-default btn-white">Localizar um evento</a>
            </div>
          </div>
        </Row>
      </Container>
      <div className="box-blue"></div>
    </section>
  )
}
