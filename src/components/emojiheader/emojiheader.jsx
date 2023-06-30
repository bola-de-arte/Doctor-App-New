import React from "react";
import { EmojiSmall } from "../images";
import "./emojiheader.scss";

export default function emojiheader(props) {
  const { title } = props;
  return (
    <>
      <div class="emojiheader">
        <div class="emojiheader__box">
          <h1>{title}</h1>
          <picture className="emojiheader__picture">
            <source srcset={EmojiSmall} />
            <img src={EmojiSmall} alt="" />
          </picture>
        </div>
      </div>
    </>
  );
}
