import React from "react";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Container from "../components/container/container";
import Login from "../components/login/login";

export default function Home() {
  //Needed to export so I can later import elsewhere
  return (
    <>
      <Nav />
      <Header />
      <Container>
        <Login />
      </Container>
    </>
  );
}
