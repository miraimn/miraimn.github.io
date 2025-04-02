import Card from "react-animated-3d-card";
import { useState } from "react";
import "../../css/CardCSS/cardProfile.css";
import LoremIpsum from "react-lorem-ipsum";

export default function Card2(props) {
  var card = (
    <Card
      cursorPointer={false}
      shineStrength={0.6}
      style={{
        overflow: "visible",
      }}
    >
      <div className="cardProfile">
        <div>
          <img className="cardProfile1" src={props.data.picUrl} />
          <label className="leftCornerText">{props.data.picName}</label>
          <label className="rightCornerText">{props.data.picText}</label>
        </div>
      </div>
    </Card>
  );
  var txt = (
    <div
      className="haku-from-hide-ani"
      reverse={props.position == "right" ? 0 : 1}
      haku-ani-delay={800}
    >
      <h5
        className="ml-1 textDescription haku-from-hide-ani-text"
        style={{ textIndent: "3rem", zIndex: "4" }}
      >
        {props.data.mainText}
      </h5>
      <div className="haku-from-hide-ani-mask"></div>
    </div>
  );

  let dir;
  var cardData = [card, txt];
  if (props.position == "right") {
    dir = "row";
  } else {
    dir = "row-reverse";
  }
  return (
    <div
      className="app"
      style={{
        display: "flex",
        // float:"left",
        "--direction": dir,
      }}
    >
      {cardData}
    </div>
  );
}
