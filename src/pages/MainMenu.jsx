import React from "react";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/hero";
import Container from "../components/container/container";
import Sector from "../components/sector/sector";

export default function MainMenu() {
  return (
    <>
      <section>
        <Nav />
        <Hero />
        <Container>
          <Sector />
        </Container>
      </section>
    </>
  );
}
