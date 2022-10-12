import React from "react";

export default function FormInsertSetlist() {
  return (
    <>
      <p>
        Adicione aqui as músicas do seu repertório que deseja divulgar no
        evento.
      </p>
      <h1>Adicionar música</h1>
      <div className="form-setlist">
        <div className="box-form">
          <label htmlFor="nome_musica">
            <h2>Nome da música</h2>
            <input type="text" name="nome_musica" maxLength="120" required />
          </label>
          <label htmlFor="nome_artista">
            <h2>Nome do artista / banda</h2>
            <input type="text" name="nome_artista" maxLength="120" required />
          </label>
        </div>
        <div className="box-submit">
          <a href="" className="bto-addmusic">
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2897 0.799998V21.48H7.76969V0.799998H12.2897ZM19.9297 9.04V13.2H0.0896876V9.04H19.9297Z"
                fill="#A0168F"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
