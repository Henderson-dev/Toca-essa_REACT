import { React, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ModalLogin from "./ModalLogin";
import { Link } from "react-router-dom";

export default function Header({ status }) {
  const [modalLogin, setModalLogin] = useState(false);
  const menuItens = status;

  return (
    <header>
      <Container>
        <Row>
          <div className="col-12">
            <nav>
              <ul className="d-flex flex-row justify-content-end">
                <li>
                  <Link to="/">Home</Link>
                </li>
                {/* Se esta logado */}
                {status === "logado" ? (
                  <>
                    <li>
                      <Link to="/meus-dados">Meus dados</Link>
                    </li>
                    <li>
                      <Link to="/">Logout</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/como-funciona">Como funciona</Link>
                    </li>
                    <li>
                      <a href="#" onClick={() => setModalLogin(true)}>
                        Login Artista
                      </a>
                    </li>
                  </>
                )}
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
