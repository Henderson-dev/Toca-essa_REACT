import { React, useState } from "react";

export default function FlshCardMusic({ id, music, artist, color }) {
  const [colorbox, setColorbox] = useState("");
  if (color === 1) {
    //setColorbox("pink");
  }
  return (
    <>
      <div className="col-lg-4">
        <article className="card-request" id={id}>
          {/* {colorbox} */}
          <h2>{music}</h2>
          <span>{artist}</span>
        </article>
      </div>
    </>
  );
}
