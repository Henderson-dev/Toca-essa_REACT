import React from "react";
import EventCard from "../components/EventCard";
import Header from "../components/Header";
import HeroPage from "../components/HeroPage";

export default function Dashboard() {
  return (
    <>
      <Header status="logado"></Header>
      <HeroPage title="Próximos eventos"></HeroPage>
      <section className="list-events">
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
      </section>
      <section className="list-events">
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
      </section>      
    </>
  );
}
