import React from "react";
import "..//css/haku.scss";
import "../css/CardCSS/about.css";
import "../css/about.scss";
import LoremIpsum from "react-lorem-ipsum";
import GridView from "../components/pages/GamesPage/GridView";

// import profileDataInfo from "../json/profileData.json";
import Card5 from "../components/elements/Card5";

import Card5Data from "../json/card5Data.json";
import MouseTrail from "../components/haku/MouseTrail";

import Boldoo from "../assets/images/ai/Boldoo.png";
import Devjrekh from "../assets/images/ai/Devjrekh.png";
import Ganaa from "../assets/images/ai/Ganaa.png";
import Ganzo from "../assets/images/ai/Ganzo.png";
import Khongoroo from "../assets/images/ai/Khongoroo.png";
import Solongo from "../assets/images/ai/Solongo.png";

const profileDataInfo = [
  {
    picUrl: Ganzo,
    title: "Ganzo",
    text: "contact",
  },
  {
    picUrl: Boldoo,
    title: "Boldoo",
    text: "contact",
  },
  {
    picUrl: Devjrekh,
    title: "Devjrekh",
    text: "contact",
  },
  {
    picUrl: Ganaa,
    title: "Ganaa",
    text: "contact",
  },
  {
    picUrl: Khongoroo,
    title: "Khongoroo",
    text: "contact",
  },
  {
    picUrl: Solongo,
    title: "Solongo",
    text: "contact",
  },
];
export default function About() {
  return (
    <div>
      <MouseTrail backGroundColor="#14113a" inner={0} />
      <br />

      <div className="backgroundImageTop"></div>
      <div className="about_Container haku-from-bottom ">
        <div className="about_Title1">About US</div>
        <div className="about_picContainer">
          {/* <div>
            <img
              className="about_mainPicture"
              src="https://risinghighacademy.com/wp-content/uploads/2021/05/Top-12-Hyper-Casual-Games-April-2020.jpg"
            />
          </div> */}
          <div className="about_picText1">
            <div className=" haku-from-hide-ani" haku-ani-delay={1000}>
              <div className="haku-from-hide-ani-text ">
                We are a IT company focusing on mobile app games, AR/VR and
                digital content making. Through different channels and members
                we have tested over 300+ games since 2020. We specialize in
                runner, strategy, simulation games. Our strength lies in our
                teams speed on executing a high quality prototype, and the
                ability to analyze & sense the market to make strong CPI tests
              </div>
              <div className="haku-from-hide-ani-mask"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="backgroundImageMiddle"></div>

      <div className="about_textContainer">
        <div className="" haku-ani-delay={0}>
          <Card5 data={Card5Data[0]} />
        </div>
        <Card5 data={Card5Data[1]} />
        {/* <Card5 data={Card5Data[2]} /> */}
      </div>

      <div className="backgroundImageBottom"></div>
      <div className="members">
        <div className="about-mainContainer about_Container ">
          <p>
            <div className="simple-wave-3"></div>
          </p>
          <GridView
            data={profileDataInfo}
            title="Members"
            cardName="profile"
            margin="none"
          ></GridView>
        </div>
      </div>
    </div>
  );
}
