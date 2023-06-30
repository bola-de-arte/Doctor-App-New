import React from "react";
import Emojiheader from "../components/emojiheader/emojiheader";
import Nav from "../components/nav/Nav";
import Scale from "../components/scale/scale";
import "../components/styles/form.scss";

export default function Evaluacion() {
  return (
    <div>
      <Nav />
      <Emojiheader title="Calificación" />
      <Scale category="Aseo personal" />
      <Scale category="Puntualidad" />
      <Scale category="Amabilidad" />
      <Scale category="Atención brindada" />
      <div class="form__group form__group--page">
        <input class="form__btn" type="submit" value="Registrar" />
      </div>
    </div>
  );
}
