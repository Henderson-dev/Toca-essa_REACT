import React from "react";

export default function FlshCardMusic({ music, artist }) {
  return (
    <>
      <article className="col-lg-4">
        <h2>{music}</h2>
        <span>{artist}</span>
      </article>
    </>
  );
}
