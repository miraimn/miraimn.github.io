import * as THREE from "three";
import { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import {
  BakeShadows,
  Html,
  AdaptiveDpr,
  AdaptiveEvents,
} from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import Robo from "./Robo";
import Navigation from "../components/haku/Navigation";
import Triangles from "./Triangles";
import { LoremIpsum } from "react-lorem-ipsum";
import Card2 from "../components/elements/Card2";
import homeAbout from "../json/homeAbout.json";
import gameInfoData from "../json/gamesInfo.json";
import CarouselApp from "../components/haku/Carousel";
import HomeContact from "../components/pages/HomePage/HomeContact";
import Footer from "../components/haku/Footer";
import MouseTrail from "../components/haku/MouseTrail";
import HomeAboutModel from "../components/haku/HomeAboutModel";

import Model2 from "../components/test/testGrid";

import dominion from "../assets/images/ai/dominion.jpg";
import bodyMaker from "../assets/images/ai/body-Maker.png";
import mutantFighter from "../assets/images/ai/mutant-Fighter.webp";
import cityMnster from "../assets/images/ai/asd.jpg";
import insect from "../assets/images/ai/ICON-512-2.png";

const images = [cityMnster, dominion, insect, mutantFighter, bodyMaker];
for (let i of gameInfoData) {
  i.picUrl = images[i.picUrl];
}
// import Stats from "three/examples/jsm/libs/stats.module";
// import Stats from '@react-three/drei/Stats';

function Box({ text, color, ...props }) {
  const [hovered, set] = useState(false);
  return (
    <mesh
      {...props}
      onPointerOver={(e) => set(true)}
      onPointerOut={(e) => set(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? "hotpink" : color} />
      <Html position={[0, 0, 1]} className="label" center>
        {text}
      </Html>
    </mesh>
  );
}
function ScrollContainer({ scroll, children }) {
  const { viewport } = useThree();
  const vec = new THREE.Vector3();
  const group = useRef();
  useFrame((state, delta) => {
    // group.current.position.y = THREE.MathUtils.damp(group.current.position.y, viewport.height * scroll.current, 4, delta)
    // Or:
    group.current.position.lerp(
      vec.set(0, viewport.height * scroll.current, 0),
      0.1
    );
  });
  return <group ref={group}>{children}</group>;
}
function Scene() {
  const viewport = useThree((state) => state.viewport);
  return (
    <>
      {/* <primitive object={fbx} scale={0.005} position={[0, -viewport.height, 0]}/> */}
      {/* <Box text={<span>Part1</span>} color="aquamarine" />
        <Box text={<span>Part2</span>} color="lightblue" position={[0, -viewport.height, 0]} /> */}
    </>
  );
}
function Rig({ children }) {
  const ref = useRef();
  const vec = new THREE.Vector3();
  const { camera, mouse } = useThree();
  return <group ref={ref}>{children}</group>;
}

var aboutData = [];
for (let i = 0; i < homeAbout.length; i++) {
  if (i % 2 == 0) var position = "left";
  else var position = "right";
  aboutData.push(
    // <div>
    //   homeAbout[i].mainText
    // </div>
    <Card2 className="d-inline" data={homeAbout[i]} position={position}></Card2>
  );
  aboutData.push(<hr></hr>);
}
aboutData.pop();

function Part1() {
  return <h1> hola </h1>;
}

export default function Three(props) {
  const scrollRef = useRef();
  const scroll = useRef(0);
  return (
    <>
      <div className="contain">
        <MouseTrail backGroundColor="#14113a" inner={0} />
        {/* <Navigation /> */}
        <div
          ref={scrollRef}
          onScroll={(e) =>
            // console.log(e.target.clientHeight)
            (scroll.current =
              e.target.scrollTop /
              (e.target.scrollHeight - e.target.clientHeight / 0.4))
          }
          // className="scroll"
        >
          <div className="backgroundImageTop"></div>
          <div
            className="about_Container "
            style={{ width: "70%", margin: "auto", marginTop: "5rem" }}
          >
            <div className="about_Title1 bigFont">
              GAMING FOR <div className="o">EVERYONE</div>
            </div>
            <p className="Welcome-Para">
              <div className=" haku-from-hide-ani" haku-ani-delay={100}>
                <div className="haku-from-hide-ani-text ">
                  We are challengers and growers in the ever changing market of
                  mobile gaming, content making and giving happiness to millions
                  of users around the world. We live for the ‘wow’ moment
                  everyday!
                </div>
                <div className="haku-from-hide-ani-mask"></div>
              </div>
            </p>
          </div>
          <div className="backgroundImageMiddle"></div>
          <div>
            <h1 className="Welcome-Title" style={{ zIndex: "0" }}>
              About Us
            </h1>
            <HomeAboutModel />
          </div>
          <div>
            <div className="waveSpacerTopContact waveLayer-top"></div>
            <div className="bgColor">
              <div className="backgroundImageBottom"></div>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "3rem",
                  color: "#f0f0f0",
                }}
              >
                Projects
              </div>
              <div className="Home-Projects">
                <CarouselApp data={gameInfoData}></CarouselApp>
              </div>
            </div>
            <div className="waveSpacerBottom waveLayer-top"></div>
          </div>
          {/* <div className="backgroundImageBottom"></div> */}
          <div
            className="haku-from-bottom  "
            style={{
              minHeight: "100vh",
              maxHeight: "fitContent",
              minWidth: "80%",
              maxWidth: "100%",
              margin: "auto",
            }}
          >
            <div
              className="home-contact-div"
              style={{
                outline: "solid white ",
                border: "1px solid white",
                borderRadius: "0.5rem",
                marginTop: "4rem",
              }}
            >
              <HomeContact />
            </div>
          </div>
          {/* <div style={{marginTop:"1px"}}/> */}
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}
