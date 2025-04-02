import React from "react";

import "../../css/CardCSS/card.css";
export default function Card1(props) {
  return (
    <div>
      <div
        className="card"
        onClick={() => {
          props.onClick(props.num);
        }}
      >
        <div className="card1">
          <img className="picture" src={props.data.picUrl} />
          <div className="title">{props.data.title}</div>
          <div className="description">{props.data.description}</div>
          <div className="play">
            <a href={props.data.link}>{props.data.btnText}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
