import React from "react";
import { Container } from "react-bootstrap";

export default function ForArtist() {
  return (
    <section className="for-artist">
      <div className="col-image"></div>
      <div className="col-text">
        <span>Artista / Banda</span>
        <h2>Receba feedback do público</h2>
        <p>
          Através do feedback do público o artista pode adaptar o seu repertório
          para melhorar a qualidade de apresentações futuras.
        </p>
        <a href="#">Criar conta</a>
      </div>
    </section>
  );
}
