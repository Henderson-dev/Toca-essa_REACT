import React from 'react'
import {Container, Row} from "react-bootstrap";

export default function Header() {
  return (
    <header>
      <Container>
        <Row>
          <div className="col-12">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#">Como Funciona</a></li>
              <li><a href="#">Login Artista</a></li>
            </ul>
          </div>
        </Row>
      </Container>
    </header>
  )
}
