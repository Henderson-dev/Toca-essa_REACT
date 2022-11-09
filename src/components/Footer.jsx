import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <div className="col-lg-2">
              <img src="../assets/images/logo_white_toca-essa.svg" alt="" />
            </div>
            <div className="col-lg-2">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/como-funciona">Como funciona</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h2>Artista</h2>
              <ul>
                <li>
                  <Link to="/">Crie sua conta</Link>
                </li>
                <li>
                  <Link to="/como-funciona">Crie seus eventos</Link>
                </li>
              </ul>
              <h2>Público</h2>
              <ul>
                <li>
                  <Link to="/">localize um evento</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 d-flex justify-content-end">
              <ul className="d-flex list-social">
                <li>
                  <a href="#" target="_blank">
                    <img src="../assets/images/rs_twitter.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img src="../assets/images/rs_youtube.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img src="../assets/images/rs_facebook.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img src="../assets/images/rs_instagram.svg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </Row>
          <Row className="credits">
            <div className="col-lg-8">
              <p>
                Copyright © 2022 tocaessa.com.br - Todos os direitos reservados.
                Belo Horizonte, MG - Brasil
              </p>
            </div>
            <div className="col-lg-4 d-flex justify-content-center justify-content-lg-end">
              <ul className="d-flex">
                <li>
                  <a href="#">Aviso de Privacidade</a>
                </li>
                <li>
                  <p>•</p>
                </li>
                <li>
                  <a href="#">Termos de Uso</a>
                </li>
              </ul>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
}
