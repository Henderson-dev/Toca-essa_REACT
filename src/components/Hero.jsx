import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function Hero() {
  return (
    <section className='hero'>
      <Container>
        <Row>
          <div className="col-12">
            <img src="./assets/images/logo_toca-essa.png" alt="" />
          </div>
        </Row>
      </Container>
    </section>
  )
}
