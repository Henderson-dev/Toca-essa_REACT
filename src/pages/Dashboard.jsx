import React from "react";
import Header from "../components/Header";
import HeroPage from "../components/HeroPage";

export default function Dashboard() {
  return (
    <>
      <Header status="logado"></Header>
      <HeroPage title="Próximos eventos"></HeroPage>
    </>
  );
}
