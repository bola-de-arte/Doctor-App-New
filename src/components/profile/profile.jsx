import React from "react";
import "./profile.scss";
import "../styles/form.scss";
import Sector from "../sector/sector";
import { FemaleDr } from "../images";
import { EmojiBig } from "../images";

export default function profile() {
  return (
    <div>
      <div className="profile__box">
        <source srcset={FemaleDr} />
        <img src={FemaleDr} alt="" />
        <div className="profile__text">
          <p>Dra. Obregón</p>
          <p>Ginecóloga Infanto Juvenil</p>
          <p>Idiomas hablados: Inglés, Español</p>
        </div>
      </div>
      <div className="profile__box">
        <h1>Calificación</h1>
      </div>
      <div className="profile__box">
        <source srcset={EmojiBig} />
        <img src={EmojiBig} alt="" />
      </div>
      <div className="profile__box">
        <h1>Promedio: 9.5</h1>
      </div>
      <div className="sector__header">
        <p>Disponibilidad</p>
      </div>
      <div className="profile__text">
        <p>Lunes a viernes: 10 am a 5 pm</p>
        <p>Sábados: 10 am a 1 pm</p>
      </div>
      <div class="form__group form__group--page">
        <input
          class="form__btn"
          type="submit"
          value="Registra tu calificación"
        />
      </div>
    </div>
  );
}
