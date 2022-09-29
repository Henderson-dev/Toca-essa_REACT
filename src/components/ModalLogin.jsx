import React from "react";
import Modal from "react-bootstrap/Modal";

export default function ModalLogin(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h2>Login do artista</h2>
        <div className="form-login">
          <form action="/dashboard">
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" />
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" />
            <input type="submit" value="ok" />
          </form>
          <ul>
            <li>
              <a href="#">Esqueci minha senha</a>
            </li>
            <li>
              <a href="#">Criar minha conta</a>
            </li>
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  );
}
