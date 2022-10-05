import React from "react";
import { Container, Row } from "reactstrap";
import SetlistCard from "./SetlistCard";
import TitleBox from "./TitleBox";

export default function SetlistGroup({ dataSetlist }) {
  console.log(dataSetlist);
  return (
    <>
      <section className="setlist-group">
        <form>
          <Container>
            <Row>
              <TitleBox title="Setlist de hoje" bgcolor="pink"></TitleBox>
              {dataSetlist.map((setlist, index) => {
                return (
                  <SetlistCard
                    key={index}
                    music={setlist.nome_da_musica}
                    artist={setlist.nome_do_artistabanda}
                    row={index + 1}
                    // like={setlist.curtidas}
                    // unlike={setlist.nao_curtida}
                  ></SetlistCard>
                );
              })}
            </Row>
          </Container>
        </form>
      </section>
    </>
  );
}
