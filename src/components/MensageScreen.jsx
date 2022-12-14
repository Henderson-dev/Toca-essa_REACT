import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function MensageScreen({ msg, error }) {
  return (
    <section className="container-error">
      <div className="container h-100">
        <div className="row h-100 d-flex align-items-center">
          <div className="col-12 text-center">
            {error ? (
              <>
                <h1>{msg}</h1>
                <span>
                  Erro: {error.status} - {error.statusText}
                </span>
              </>
            ) : (
              <>
                <ScaleLoader color="#ffffff" />
                <span className="loading"></span>
                <h1>{msg}</h1>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
