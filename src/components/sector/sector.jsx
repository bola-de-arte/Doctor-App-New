import React from "react";
import "./sector.scss";
import "../styles/form.scss";
import { Materno, Universitario, Zambrano, Doctors } from "../images";

export default function sector() {
  return (
    <div className="sector">
      <h2>Elija el hospital de su</h2>
      <h2> preferencia</h2>

      <div className="sector__header">
        <p>Sector Publico</p>
      </div>

      <div className="sector__types">
        <div className="sector__wrap">
          <picture className="sector__picture">
            <source srcset={Materno} />
            <img src={Materno} alt="" />
            <a>Hospital Materno Infantil</a>
          </picture>
        </div>
        <div className="sector__wrap">
          <picture className="sector__picture">
            <source srcset={Universitario} />
            <img src={Universitario} alt="" />
            <a>Hospital Universitario Dr. José Eleuterio González</a>
          </picture>
        </div>
      </div>
      <footer>Ver más</footer>
      <div className="sector__header">
        <p>Sector Publico</p>
      </div>
      <div className="sector__types">
        <div className="sector__wrap">
          <picture className="sector__picture">
            <source srcset={Zambrano} />
            <img src={Zambrano} alt="" />
            <a>Hospital Zambrano</a>
          </picture>
        </div>
        <div className="sector__wrap">
          <picture className="sector__picture">
            <source srcset={Doctors} />
            <img src={Doctors} alt="" />
            <a>Doctors Hospital</a>
          </picture>
        </div>
      </div>
      <footer>Ver más</footer>
      <div class="form__group form__group--page">
        <input class="form__btn" type="submit" value="Donaciones" />
      </div>
    </div>
  );
}
