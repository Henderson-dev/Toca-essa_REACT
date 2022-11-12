import React from "react";

export default function TitleBox({ title, bgcolor, position }) {
  return (
    <>
      {position === "initial" ? (
        <>
          <div
            className={`box-title-hero-internal position-initial ${bgcolor}`}
          >
            <h1>{title}</h1>
          </div>
        </>
      ) : position === "bottom" ? (
        <>
          <div className={`box-internal-bottom ${bgcolor}`}>
            <h1>{title}</h1>
          </div>
        </>
      ) : (
        <>
          <div className={`box-title-hero-internal ${bgcolor}`}>
            <h1>{title}</h1>
          </div>
        </>
      )}
    </>
  );
}
