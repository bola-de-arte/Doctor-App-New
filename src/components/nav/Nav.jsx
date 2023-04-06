import React from "react";
import "./Nav.scss";
import Hamburger from "../../assets/images/Hamburger.svg";
import Lotus from "../../assets/images/Lotus.svg";
import Star from "../../assets/images/Star.svg";
import Schedule from "../../assets/images/Schedule.svg";
import stethoscope from "../../assets/images/stethoscope.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="nav">
        <div className="nav__left">
          <Link to="/">
            <img src={Hamburger} />
          </Link>
          <Link to="/">
            <img src={Lotus} />
          </Link>
        </div>

        <div className="nav__right">
          <Link to="/">
            <img src={Star} />
          </Link>
          <Link to="/">
            <img src={Schedule} />
          </Link>
          <Link to="/">
            <img src={stethoscope} />
          </Link>
        </div>
      </div>
    </>
  );
}
