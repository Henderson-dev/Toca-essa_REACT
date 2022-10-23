import React from "react";

export default function CardReceivedMessages({ name, mail, comment, color }) {
  return (
    <>
      <div className={`col-12 card-message ${color}`}>
        <h2>{name}</h2>
        <span>{mail}</span>
        <p>{comment}</p>
      </div>
    </>
  );
}
