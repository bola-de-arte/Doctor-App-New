import React from "react";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Container from "../components/container/container";
import Login from "../components/register/login";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Header title="Iniciar Sesión" />
      <Container>
        <Login />
      </Container>
    </>
  );
}
