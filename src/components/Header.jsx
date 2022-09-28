import { React, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ModalLogin from "./ModalLogin";
import { Link } from 'react-router-dom';

export default function Header() {
  const [modalLogin, setModalLogin] = useState(false);

  return (
    <header>
      <Container>
        <Row>
          <div className="col-12">
            <nav>
              {/* <Link to="/">Home</Link>
              <Link to="/como-funciona">Como funciona</Link> */}
              <ul>
                <li>
                

                </li>
                <li></li>
                <li>
                  <a href="#" onClick={() => setModalLogin(true)}>
                    Login Artista
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </Row>
      </Container>
      <ModalLogin
        show={modalLogin}
        onHide={() => setModalLogin(false)}
      ></ModalLogin>
    </header>
  );
}
