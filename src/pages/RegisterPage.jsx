import React from "react";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Container from "../components/container/container";
import Register from "../components/register/register";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Header title="Registro de Sesión" />
      <Container>
        <Register />
      </Container>
    </>
  );
}
