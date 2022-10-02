import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function ModalLogin(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // Pega os dados digitados no campo e-mail
  const hadleEmail = (e) => {
    setEmail(e.target.value);
  };
  // Pega os dados digitados no campo password
  const hadlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Função para processar o envio do formulário
  const handleSubmit = (event) => {
    //event.preventDefault();

    if (!email) {
      console.log("email vazio");
    }
    if (!password) {
      console.log("password vazio");
    }
    // Limpa o formulário
    setEmail("");
    setPassword("");
  };

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
        <div className="form-login form-default">
          <form onSubmit={handleSubmit} action="/dashboard">
            <label htmlFor="email">
              <span>E-mail</span>
              <input
                type="text"
                name="email"
                placeholder="Digite seu e-mail"
                onChange={hadleEmail}
              />
            </label>
            <label htmlFor="password">
              <span>Senha</span>
              <input type="password" name="password" onChange={hadlePassword} />
            </label>
            <input type="submit" value="ok" className="form-right" />
          </form>
          <ul className="d-flex list-login">
            <li>
              <a href="#">Esqueci minha senha</a>
            </li>
            <li>|</li>
            <li>
              <a href="#">Criar minha conta</a>
            </li>
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  );
}
