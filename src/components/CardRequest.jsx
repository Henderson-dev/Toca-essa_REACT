import React from "react";

export default function CardRequest({ row, music, artist, select }) {
  // Função para selecionar e deselecionar os cards
  function selectMusic(row) {
    let cardMusic = document.querySelector(".card-" + row);
    if (cardMusic.classList.contains("selected-card")) {
      cardMusic.classList.remove("selected-card");
    } else {
      cardMusic.classList.add("selected-card");
    }
  }

  return (
    <>
      <article className="col-lg-4">
        <div
          className={
            select === true ? `box-request selected-card card-${row}` : `box-request card-${row}`
          }
          onClick={() => {
            selectMusic(row);
          }}
        >
          <h2>{music}</h2>
          <span>{artist}</span>
        </div>
      </article>
    </>
  );
}
