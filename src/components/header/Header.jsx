import React from "react";
import "./Header.scss";

export default function Header(props) {
  const { title } = props;
  return (
    <>
      <div class="header">
        <div class="header__main">
          <h1>{title}</h1>
        </div>
      </div>
    </>
  );
}
