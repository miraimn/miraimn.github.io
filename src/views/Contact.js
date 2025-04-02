import React from "react";
import "..//css/haku.scss";
import "../css/CardCSS/about.css";
import "../css/about.scss";
import MyMapComponent from "../components/elements/GoogleMap";
import TestMap from "../components/haku/TestMap";
import HomeContact from "../components/pages/HomePage/HomeContact";
import MouseTrail from "../components/haku/MouseTrail";

const Contact = () => {
  return (
    <>
      <MouseTrail backGroundColor="#14113a" inner={0} />{" "}
      <div className="mainContainer">
        <div className="mainContainer-title haku-from-bottom">Contact</div>
        <br />
        <div className="contact-map  haku-from-scale">
          <TestMap></TestMap>
        </div>
        <div>
          <div className="full-width">
            <div className="waveSpacerTopContact waveLayer-top"></div>
            <div className="bgColor">
              <div className="in-section-wave"></div>
              <div className="reverse-in-section-wave"></div>
              <div
                className="normal-width haku-from-bottom"
                data-reveal-delay="200"
              >
                <div
                  className="contactContainer"
                  style={{ paddingTop: "3rem" }}
                >
                  <div
                    className="contact-data-box haku-from-top"
                    data-reveal-delay="200"
                  >
                    {/* <p className="contact-data-bos-text">
                      Folly was these three and songs arose whose. Of in
                      vicinity contempt together in possible branched. Assured
                      company hastily looking garrets in oh. Most have love my
                      gone to this so. Discovered interested prosperous the our
                      affronting insipidity day. Missed lovers way one vanity
                      wishes nay but. Use shy seemed within twenty wished old
                      few regret passed. Absolute one hastened mrs any sensible.
                      In it except to so temper mutual tastes mother. Interested
                      cultivated its continuing now yet are.
                    </p> */}
                    {/* <div className="contact-up-line"></div> */}
                    <div className="home-contact" style={{border:"1px solid white",borderRadius:"1.5rem",margin:"auto"}} >
                      <HomeContact />
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
            <div className="waveSpacerBottom waveLayer-bottom"></div>
          </div>
        </div>
        <br></br>
      </div>
    </>
  );
};

export default Contact;
