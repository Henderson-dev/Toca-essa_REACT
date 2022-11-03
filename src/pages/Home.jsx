import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ForArtist from "../components/home/ForArtist";
import HowWorks from "../components/home/HowWorks";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <HowWorks></HowWorks>
      <ForArtist></ForArtist>
    </>
  )
}
