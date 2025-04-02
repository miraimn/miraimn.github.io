import React from "react";
import "../../css/card4.scss";
import playStore from "../../assets/images/playstore.png"

//https://cdn.mos.cms.futurecdn.net/tyF9Uef2VsKLBu3B52Qegn-1200-80.jpg

export default function Card4(props) {
  return (
    <>
      <div>
        <div className="card4_outer">
          <div className="card4_inner">
            
            <img className="card4_picture" src={props.data.picUrl} />
            <div className="card4_title">{props.data.title}</div>
            <div className="card4_description textContainer">
              {props.data.description}
            </div>
            <div className="card4_extraDescription">{props.data.text}</div>
            <a href={props.data.link} className="playStorePic card4_play">
              <img src={playStore}></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
