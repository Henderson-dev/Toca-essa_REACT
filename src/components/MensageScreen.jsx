import React from "react";

// Errors Axios mensages
// https://axios-http.com/docs/handling_errors

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
