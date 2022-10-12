import React from "react";

export default function EvenInsertFlahsCard({ id, music, artist, deleteCard }) {
  return (
    <>
      <div className="col-md-6">
        <article className="insert-card-music">
          <div className="box-music">
            <h2>{music}</h2>
            <span>{artist}</span>
          </div>
          <div className="box-close">
            <img
              src="./assets/images/close.svg"
              alt="Remover música"
              className="remove-card"
              onClick={()=>{deleteCard(id)}}
            />
          </div>
        </article>
      </div>
    </>
  );
}
