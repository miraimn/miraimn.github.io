import {
  Effects,
  OrthographicCamera,
  PerformanceMonitor,
  Stats,
  BakeShadows,
} from "@react-three/drei";
import { Suspense } from "react";
import { Canvas, extend } from "react-three-fiber";
import { UnrealBloomPass } from "three-stdlib";
import { Board } from "./Board";

import ar from "../../assets/images/Icons/ar.png";
import gamePad from "../../assets/images/Icons/gamepad.png";
import games from "../../assets/images/Icons/games.png";
import mobileGame from "../../assets/images/Icons/mobile-game.png";
import play from "../../assets/images/Icons/play.png";
import vr from "../../assets/images/Icons/vr.png";
import web from "../../assets/images/Icons/web.png";
import megaphone from "../../assets/images/Icons/megaphone (2).png";
import film from "../../assets/images/Icons/film-slate.png";
import "../../css/haku-homeAbout.scss";
import dataInfo from "../../json/homeAbout.json";
import { OnScroll } from "../../App";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

extend({ UnrealBloomPass });

function ImageIcon(props) {
  return (
    <div
      className={"haku-home-about-img"}
      style={{
        position: "absolute",
        zIndex: "1",
        top: props.top,
        right: "50%",
        transform: "translateX(50px)",
        marginRight: (props.pos != "right" ? "" : "-") + props.margin,
      }}
    >
      <img
        src={props.pic}
        width={100}
        className={"haku-from-" + props.pos}
        {...props}
      ></img>
    </div>
  );
}

function TextDiv(props) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: props.top,
          right: "50%",
          transform: "translateX(50%)",
          zIndex: "1",
          marginRight: (props.align == "end" ? "" : "-") + props.margin,
        }}
        className="haku-home-about-p"
      >
        <p
          style={{
            color: "#f0f0f0",
            textAlign: props.align,
            fontSize: "30px",
            margin: "auto",
          }}
          className={"haku-from-" + (props.align == "end" ? "left" : "right")}
        >
          {props.data.mainText}
        </p>
      </div>
    </>
  );
}

function Small(props){
  var from = "haku-from-"+props.side
  return(
    <>
    <div style={{fontSize:"30px",paddingTop:"100px",color:"#f2f2f2"}}>
    {dataInfo[props.id].mainText}
    </div>
        <div className={from} style={{display:"flex",flexDirection:"row",paddingTop:"100px"}} >
          <img style={{margin:"auto",width:"20vw"}}
            src={props.pic1}
        ></img>
        <img style={{margin:"auto",width:"20vw"}}
            src={props.pic2}
        ></img>
        <img style={{margin:"auto",width:"20vw"}}
            src={props.pic3}
        ></img>
        </div>
    </>
  )
}


export default function HomeAboutModel(props) {
  return (
    <>
    <div className="Home-About-Big" >

      <div style={{ width: "100vw", height: "1920px", position: "relative" }}>
        <ImageIcon pos="right" pic={mobileGame} margin="200px" top="180px" />
        <ImageIcon
          pos="right"
          pic={gamePad}
          haku-ani-delay={200}
          margin="400px"
          top="280px"
          />
        <ImageIcon
          pos="right"
          pic={games}
          haku-ani-delay={400}
          margin="600px"
          top="400px"
          />
        <ImageIcon pos="left" pic={ar} margin="250px" top="730px" />
        <ImageIcon
          pos="left"
          pic={vr}
          haku-ani-delay={200}
          margin="410px"
          top="900px"
          />
        <ImageIcon
          pos="left"
          pic={web}
          haku-ani-delay={400}
          margin="600px"
          top="1040px"
          />
        <ImageIcon pos="right" pic={megaphone} margin="250px" top="1410px" />
        <ImageIcon
          pos="right"
          pic={play}
          haku-ani-delay={200}
          margin="430px"
          top="1500px"
          />
        <ImageIcon
          pos="right"
          pic={film}
          haku-ani-delay={400}
          margin="600px"
          top="1600px"
          />
        <TextDiv
          data={dataInfo[0]}
          align="end"
          margin="400px"
          top="100px"
          ></TextDiv>
        <TextDiv
          data={dataInfo[1]}
          align="start"
          margin="400px"
          top="600px"
          ></TextDiv>
        <TextDiv
          data={dataInfo[2]}
          align="end"
          margin="400px"
          top="1300px"
          ></TextDiv>
        <div className="haku-home-about-canvas-parent">
          <Canvas gl={{ stencil: false, antialias: false }} dpr={0.8}>
            <OrthographicCamera makeDefault zoom={100}>
              <Suspense fallback>
                <ambientLight intensity={3} color={"3355ff"} />
                <EffectComposer>
                  <Bloom
                    luminanceThreshold={0}
                    luminanceSmoothing={0.2}
                    height={500}
                    />
                </EffectComposer>
                <Board
                  rotation={[Math.PI / 2, Math.PI, 0]}
                  position={[0, 0, -1]}
                  />
                <BakeShadows />
              </Suspense>
            </OrthographicCamera>
          </Canvas>
        </div>
        {/* <br></br> */}
      </div>
      </div>
      <div className="Home-About-Small" style={{position:'relative',width:"80%",margin:"auto",textAlign:"center"}} >
        <Small id={0} pic1={gamePad} pic2={mobileGame} pic3={games} side="right" />
        <hr/>
        <Small id={1} pic1={vr} pic2={web} pic3={ar} side="left" />
        <hr/>
        <Small id={2} pic1={play} pic2={megaphone} pic3={film} side="bottom" />
      </div>
    </>
  );
}
