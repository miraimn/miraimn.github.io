import {
  BakeShadows,
  OrbitControls,
  Stats,
  PerformanceMonitor,
  OrthographicCamera,
  Effects,
  Sparkles,
  Stars,
} from "@react-three/drei";
import { Canvas, useFrame, useThree, extend } from "react-three-fiber";
import { Model } from "../components/test/test";
import Model2 from "../components/test/testGridHaku";
import {
  SSAO,
  Bloom,
  EffectComposer,
  SelectiveBloom,
  Outline,
  Selection,
  Select,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Suspense, useState, useRef } from "react";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { OutlineEffect, RenderPass } from "three-stdlib";
import Test from "../components/test/testGridHaku";
import Robo from "../views/Robo";
import * as THREE from "three";
import { useControls } from "leva";
import { AniAction, RotateY } from "../HAKU/HakuThreeAni";
import { DoubleSide } from "three";
import { TestText } from "../components/test/TestText";
import { Board } from "../components/haku/Board";
import MouseTrail from "../components/haku/MouseTrail";

extend({ UnrealBloomPass });

function Initial() {
  const [varZ, setVarZ] = useState(1);
  const neonMaybe = useRef();
  const box = useRef();
  const selection = useRef();

  const { exposure, bloomThreshold, bloomStrength, bloomRadius } = useControls({
    exposure: {
      value: 5,
      min: 0.1,
      max: 10,
      step: 0.1,
    },
    bloomStrength: {
      value: 1.5,
      min: 0,
      max: 3,
      step: 0.1,
    },
    bloomRadius: {
      value: 0,
      min: 0,
      max: 1,
      step: 0.1,
    },
  });

  // var varZ=1;
  function Frame() {
    useFrame((state, delta) => {
      AniAction[1](neonMaybe, delta);
    });
    return <></>;
  }
  function GlowingCube(props) {
    const outerMaybe = useRef();
    const [postionsY, setPositionY] = useState(false);
    const cube = useRef([]);
    useFrame((state, delta) => {
      AniAction[2](cube, delta * props.speed);
    });
    return (
      <>
        <group ref={cube}>
          <mesh
            posit
            onClick={(e) => {
              setPositionY(!postionsY);
            }}
            position={props.position}
            rotation={[0, 0, varZ]}
            scale={[0.3, 0.3, 0.3]}
          >
            <sphereGeometry />
            <meshLambertMaterial
              color={props.color}
              // ref={outerMaybe}
              toneMapped={false}
            />
          </mesh>
        </group>
      </>
    );
  }

  function Draw() {
    var c = document.getElementById("caaan");
    var ctx = c.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
    return <div></div>;
  }

  const [dpr, setDpr] = useState(1);
  return (
    <div style={{ width: "100vw", height: "200vh" }}>
      <Canvas shadows gl={{ stencil: false, antialias: false }} dpr={dpr}>
        <Frame></Frame>
        <PerformanceMonitor
          onIncline={() => setDpr(1)}
          onDecline={() => setDpr(0.7)}
        />
        <OrthographicCamera makeDefault zoom={100}>
          <Suspense fallback>
            <Stats />
            <ambientLight intensity={exposure} color={"3355ff"} />
            <directionalLight intensity={1} />
            {/* <Effects>
              <unrealBloomPass
                intensity={exposure}
                strength={bloomStrength}
                radius={bloomRadius}
              />
            </Effects> */}
            <EffectComposer>
              <Bloom
                intensity={1}
                kernelSize={0.1}
                luminanceThreshold={0}
                luminanceSmoothing={0.9}
                height={500}
              />
            </EffectComposer>
            <Stars
              ref={neonMaybe}
              radius={100}
              depth={50}
              count={5000}
              factor={4}
              saturation={10}
              fade
              speed={1}
            />
            <Board rotation={[Math.PI / 2, Math.PI, 0]} position={[0, 0, -1]} />
          </Suspense>
        </OrthographicCamera>
      </Canvas>
    </div>
  );
}

export default function Haku3d() {
  return (
    <>
      <MouseTrail />
      <div style={{ width: "100vw", height: "200vh" }}>
        <Initial />
        {/* <Test/> */}
      </div>
    </>
  );
}
