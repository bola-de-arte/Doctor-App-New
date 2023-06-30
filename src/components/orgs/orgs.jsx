import React from "react";
import "../profile/profile";
import "../styles/form.scss";
import "./orgs.scss";
import { Down } from "../images";
import { Manos } from "../images";
import { Cardio } from "../images";
import { Amanecer } from "../images";

export default function orgs() {
  return (
    <div>
      <div className="profile__box">
        <div className="profile__text">
          <p>Manos Que Sanan</p>
        </div>
        <source srcset={Manos} />
        <img src={Manos} alt="" />
      </div>

      <div className="profile__box">
        <source srcset={Cardio} />
        <img src={Cardio} alt="" />
        <div className="profile__text">
          <p>CardioChavitos</p>
        </div>
      </div>

      <div className="profile__box">
        <div className="profile__text">
          <p>Nuevo Amanecer</p>
        </div>
        <source srcset={Amanecer} />
        <img src={Amanecer} alt="" />
      </div>

      <div className="profile__box">
        <source srcset={Down} />
        <img src={Down} alt="" />
        <div className="profile__text">
          <p>Down Monterrey</p>
        </div>
      </div>
      <footer>Ver más</footer>
    </div>
  );
}
