import React from "react";
import "./doctor.scss";
import "../styles/form.scss";
import { FemaleDr, MaleDr } from "../images";

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
            <source srcset={MaleDr} />
            <img src={MaleDr} alt="" />
          </picture>
        </div>
        <div className="sector__wrap">
          <picture className="sector__picture">
            <source srcset={FemaleDr} />
            <img src={FemaleDr} alt="" />
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
            <source srcset={FemaleDr} />
            <img src={FemaleDr} alt="" />
          </picture>
        </div>
        <div className="sector__wrap">
          <picture className="sector__picture">
            <source srcset={MaleDr} />
            <img src={MaleDr} alt="" />
          </picture>
        </div>
        <div className="sector__wrap">
          <picture className="sector__picture">
            <source srcset={FemaleDr} />
            <img src={FemaleDr} alt="" />
          </picture>
        </div>
      </div>
      <footer>Ver más</footer>
    </div>
  );
}
