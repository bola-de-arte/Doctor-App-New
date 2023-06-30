import React from "react";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/hero";
import Container from "../components/container/container";
import Doctor from "../components/doctor/doctor";

export default function DoctorsMenu() {
  return (
    <>
      <section>
        <Nav />
        <Hero />
        <Container>
          <Doctor />
        </Container>
      </section>
    </>
  );
}
