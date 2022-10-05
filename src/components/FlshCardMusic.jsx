import { React, useState } from "react";

export default function FlshCardMusic({ id, music, artist, color }) {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <article className={`card-request ${color}`} id={id}>
          <h2>{music}</h2>
          <span>{artist}</span>
        </article>
      </div>
    </>
  );
}
