import React from "react";

export default function FlshCardMusic({ id, music, artist }) {
  return (
    <>
      <article className="col-lg-4" id={id}>
        <h2>{music}</h2>
        <span>{artist}</span>
      </article>
    </>
  );
}
