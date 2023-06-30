import React from "react";
import "./scale.scss";

export default function scale(props) {
  const { category } = props;
  return (
    <div className="scale">
      <h2>{category}</h2>
      <div className="scale__box">
        <div className="scale__circle"></div>
        <div className="scale__circle"></div>
        <div className="scale__circle"></div>
        <div className="scale__circle"></div>
        <div className="scale__circle"></div>
      </div>
      <div className="scale__footer">
        <p1>Malo</p1>
        <p2>Excelente</p2>
      </div>
    </div>
  );
}
