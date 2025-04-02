import React from "react";
import "../../css/CardCSS/cardSquare.css";

//https://cdn.mos.cms.futurecdn.net/tyF9Uef2VsKLBu3B52Qegn-1200-80.jpg

export default function Card3(props) {
  return (
    <>
      <div>
        <div className="card3_outer">
          <div className="card3_inner">
            <img className="card3_picture" src={props.data.picUrl} />
            <div className="card3_title">{props.data.title}</div>
            <div className="card3_description textContainer">
              {props.data.description}
            </div>
            <div className="card3_extraDescription">{props.data.text}</div>
          </div>
        </div>
      </div>
    </>
  );
}
