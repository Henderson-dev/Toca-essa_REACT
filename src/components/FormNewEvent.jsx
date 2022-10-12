import { React } from "react";
import { Container, Row } from "react-bootstrap";

export default function FormNewEvent() {
  return (
    <>
      <section className="form-new-event form-default">
        <Container>
          <Row>
            <div className="col-lg-12">
              <label htmlFor="nome_evento" className="d-flex flex-column">
                Nome do evento
                <input
                  type="text"
                  id="nome_evento"
                  name="nome_evento"
                  required
                />
              </label>
            </div>
            <div className="col-lg-4">
              <label htmlFor="date_evento" className="d-flex flex-column">
                Data do envento
                <input
                  type="date"
                  id="date_evento"
                  name="date_evento"
                  required
                />
              </label>
            </div>
            <div className="col-lg-4">
              <label htmlFor="horario_evento" className="d-flex flex-column">
                Horário do evento
                <input
                  type="time"
                  id="horario_evento"
                  name="horario_evento"
                  placeholder="hh:mm"
                  required
                />
              </label>
            </div>
            <div className="col-lg-4">
              <label htmlFor="duracao_evento" className="d-flex flex-column">
                Duração da apresentação
                <input
                  type="time"
                  id="duracao_evento"
                  name="duracao_evento"
                  placeholder="hh:mm"
                  required
                />
              </label>
            </div>
            <div className="col-lg-12">
              <label htmlFor="nome_local" className="d-flex flex-column">
                Local / Nome do estabelcimento
                <input type="text" id="nome_local" name="nome_local" required />
              </label>
            </div>
            <div className="col-lg-12">
              <label htmlFor="rua" className="d-flex flex-column">
                Rua / Avenida
                <input type="text" id="rua" name="rua" required />
              </label>
            </div>
            <div className="col-lg-4">
              <label htmlFor="numero" className="d-flex flex-column">
                Número
                <input type="text" id="numero" name="numero" required />
              </label>
            </div>
            <div className="col-lg-8">
              <label htmlFor="complemento" className="d-flex flex-column">
                Complemento
                <input
                  type="text"
                  id="complemento"
                  name="complemento"
                  required
                />
              </label>
            </div>
            <div className="col-lg-8">
              <label htmlFor="bairro" className="d-flex flex-column">
                Bairro
                <input type="text" id="bairro" name="bairro" required />
              </label>
            </div>
            <div className="col-lg-4">
              <label htmlFor="cep" className="d-flex flex-column">
                Cep
                <input type="text" id="cep" name="cep" required />
              </label>
            </div>
            <div className="col-lg-8">
              <label htmlFor="cidade" className="d-flex flex-column">
                Cidade
                <input type="text" id="cidade" name="cidade" required />
              </label>
            </div>
            <div className="col-lg-4">
              <label htmlFor="estado" className="d-flex flex-column">
                Estado
                <input type="text" id="estado" name="estado" required />
              </label>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}
