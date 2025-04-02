import React from "react";
import bgVision from "../../assets/images/NeonBG/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg";
import "../../css/CardCSS/card5.scss";
export default function Card5(props) {
  if (props.data.side === "left") {
    return (
      <>
        <div className="card5_body">
          {/* <img src={props.data.url} className="card5_img"></img> */}
          <div className="card5_titleBG haku-from-left">
            <div className="card5_title" haku-ani-delay={200}>
              {props.data.title}
            </div>
          </div>
          <div
            className="card5_description haku-from-left"
            haku-ani-delay={600}
          >
            {props.data.description}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="card5_body">
          {/* <img src={props.data.url} className="card5_img"></img> */}
          <div className="card5_titleBGRight haku-from-right">
            <div className="card5_title" haku-ani-delay={200}>
              {props.data.title}
            </div>
          </div>
          <div
            className="card5_descriptionRight haku-from-right"
            haku-ani-delay={600}
          >
            {props.data.description}
          </div>
        </div>
      </>
    );
  }
}
