import React, { useState } from "react";
import datas from "../json/projectDataInfoInProjects.json";
import "../css/haku.scss";
import "../css/CardCSS/about.css";
import "../css/about.scss";
import Card2 from "../components/elements/Card2";
import GridView from "../components/pages/GamesPage/GridView";
import gridData1 from "../json/ProjectGamesGrid.json";
import Profile from "../components/haku/Profile";
import MouseTrail from "../components/haku/MouseTrail";

import dominion from "../assets/images/ai/dominion.jpg"
import bodyMaker from "../assets/images/ai/body-Maker.png"
import mutantFighter  from "../assets/images/ai/mutant-Fighter.webp"
import cityMnster from "../assets/images/ai/asd.jpg"
import insect from "../assets/images/ai/ICON-512-2.png"

const imgs = [dominion, bodyMaker, mutantFighter, cityMnster, insect]
for(let i of gridData1){
  i.picUrl = imgs[i.picUrl];
}

// className="mt-0 mb-16 haku-from-bottom title"
// data-reveal-delay="200"
const Games = () => {

  var projectData = [];
  for (let i = 0; i < datas.length; i++) {
    projectData.push(
      <>
        <div className={"haku-from-" + (i % 2 == 0 ? "left" : "right")}>
          <Card2 data={datas[i]} position={i % 2 == 0 ? "left" : "right"}></Card2>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </>
    );
  }
  return (
    <>
    <MouseTrail backGroundColor="#14113a"/>
    <div className="mainContainer">
      <div
        className="mainContainer-title haku-from-bottom "
        data-reveal-delay="200"
      >
        Projects
      </div>
      <div className="simple-wave-2"></div>
      <div>{projectData}</div>
      <div className="full-width">
        <div className="waveSpacerTop waveLayer-top"></div>
        <div className="bgColor members" >
          <div className="normal-width">
            <div className="simple-wave"></div>
            <GridView
              data={gridData1}
              title="Games"
              cardName="Card4"
            ></GridView>
          </div>
        </div>
        <div className="waveSpacerBottom waveLayer-top"></div>
      </div>
      {/* <div>
        <GridView data={gridData1} title="AR / VR"></GridView>
      </div>
      <div>
        <GridView data={gridData1} title="Others"></GridView>
      </div> */}
    </div>
    </>
  );
};

export default Games;
