import React from "react";

export default function TitleBox({ title, bgcolor }) {
  return (
    <>
      <div className={`box-title-hero-internal ${bgcolor}`}>
        <h1>{title}</h1>
      </div>
    </>
  );
}
