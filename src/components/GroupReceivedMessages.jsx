import React from "react";
import { Container, Row } from "react-bootstrap";
import CardReceivedMessages from "./CardReceivedMessages";
import TitleBox from "./TitleBox";

export default function GroupReceivedMessages({ dataMessages, title }) {
  // Função para mudar a cor de fundo dos cards de comentários
  let bgCollor = "card-pink";
  function cardColor(number) {
    // Mutiple of 3
    let catNumber = number % 3;
    switch (catNumber) {
      case 0:
        bgCollor = "card-pink";
        break;
      case 1:
        bgCollor = "card-blue";
        break;
      case 2:
        bgCollor = "card-purple";
        break;
      default:
        bgCollor = "";
        break;
    }
    return bgCollor;
  }

  return (
    <>
      <section className="list-messages">
        <Container>
          <Row>
            <TitleBox
              title={title}
              bgcolor="purple"
              position="bottom"
            ></TitleBox>
            {dataMessages.map((messages, index) => { return (
                <CardReceivedMessages
                  key={index}
                  color={cardColor(index)}
                  name={messages.nome}
                  mail={messages.email_comentario}
                  comment={messages.comentario}
                ></CardReceivedMessages>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}
