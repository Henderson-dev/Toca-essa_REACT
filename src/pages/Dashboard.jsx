import React from "react";
import EventCard from "../components/EventCard";
import Header from "../components/Header";
import HeroPage from "../components/HeroPage";
import useFetch from "../backend/useFetch";

export default function Dashboard() {

  // Call API page ID in Wordpress
  let pathApiData = "evento/36";

  let dataFromPage = "wp-json/wp/v2/" + pathApiData;
  const { data: pageData, error, isLoad } = useFetch(dataFromPage);

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
