import {
  BakeShadows,
  OrbitControls,
  Stats,
  PerformanceMonitor,
  OrthographicCamera,
  Effects,
  Sparkles,
  Stars
} from "@react-three/drei";
import { Canvas, useFrame, useThree,extend } from "react-three-fiber";
import { Model } from "../components/test/test";
import  Model2  from "../components/test/testGrid";
import {
  SSAO,
  Bloom,
  EffectComposer,
  SelectiveBloom,
  Outline,Selection,Select
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Suspense, useState, useRef } from "react";
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass';
// import {}
import { RenderPass } from "three-stdlib";
import Test from "../components/test/testGrid";
import Robo from "../views/Robo";
import * as THREE from "three";
import { useControls } from "leva";
import { AniAction, RotateY } from "../HAKU/HakuThreeAni";
import { DoubleSide } from "three";

extend({UnrealBloomPass})

function Env(){
  return(
    <>    <group>
      <mesh receiveShadow castShadow position={[0,0.5,0]}  >
        <boxGeometry/>
        <meshLambertMaterial color={"#00ff00"}  />
      </mesh>
      <mesh receiveShadow castShadow position={[0,2.5,0]}  >
        <sphereGeometry/>
        <meshLambertMaterial color={"#00ff00"}  />
      </mesh>
      <mesh receiveShadow  castShadow position={[0,0.5,2]}  >
        <sphereGeometry/>
        <meshLambertMaterial color={"#00ff00"}  />
      </mesh>
      <mesh receiveShadow castShadow position={[2,0.5,0]}  >
        <sphereGeometry/>
        <meshLambertMaterial color={"#00ff00"}  />
      </mesh>
    </group>


    <group>
      <mesh receiveShadow castShadow position={[3,0,3]}  >
        <boxGeometry args={[2,0.1,1]} />
        <meshLambertMaterial color={"#00ff00"}  />
      </mesh>
      <mesh receiveShadow castShadow position={[3,0.3,3]} rotation={[0,.8,0]} >
        <coneGeometry args={[0.5,0.5,4]} />
        <meshLambertMaterial color={"#ffff00"}  />
      </mesh>
    </group>

    <group position={[0,0,1.5]} >
      <mesh receiveShadow castShadow position={[3,0,3]}  >
        <boxGeometry args={[2,0.1,1]} />
        <meshLambertMaterial color={"#00ff00"}  />
      </mesh>
      <mesh receiveShadow castShadow position={[3,0.3,3]} rotation={[0,.8,0]} >
        <coneGeometry args={[0.5,0.5,4]} />
        <meshLambertMaterial color={"#ffff00"}  />
      </mesh>
    </group>

    <group position={[2.5,0,.75]} >
      <mesh receiveShadow castShadow position={[3,0,3]}  >
        <boxGeometry args={[2,0.1,1]} />
        <meshLambertMaterial color={"#00ff00"}  />
      </mesh>
      <mesh receiveShadow castShadow position={[3,0.3,3]} rotation={[0,.8,0]} >
        <coneGeometry args={[0.5,0.5,4]} />
        <meshLambertMaterial color={"#ffff00"}  />
      </mesh>
      <mesh receiveShadow castShadow position={[3,0.3,3]} rotation={[0,.8,0]} >
        <boxGeometry args={[0.5,0.5,4]} />
        <meshLambertMaterial color={"#ffff00"}  />
      </mesh>
    </group>

    {/* <group>
      <mesh receiveShadow castShadow position={[0,-0.1,0]}  >
        <boxGeometry args={[30,0.01,30]} />
        <meshLambertMaterial color={"#00ffff"}  />
      </mesh>
    </group> */}
    </>

  )
}



function Initial() {
  const [varZ, setVarZ] = useState(1);
  const neonMaybe = useRef();
  const box = useRef();
  const selection = useRef();

  const {exposure,bloomThreshold,bloomStrength,bloomRadius } = useControls({
    exposure: {
      value: 0,
      min: 0.1,
      max: 10,
      step: 0.1
    },
    bloomStrength: {
      value: 0,
      min: 0,
      max: 3,
      step: 0.1
    },
    bloomRadius: {
      value: 0,
      min: 0,
      max: 1,
      step: 0.1
    }
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
    <div style={{ width: "100vw", height: "100vh" }}>
      <canvas style={{ position: "absolute" }} id="caaan"></canvas>
      <Canvas shadows gl={{ stencil: false, antialias: false }} dpr={dpr}>
        <PerformanceMonitor
          onIncline={() => setDpr(1)}
          onDecline={() => setDpr(0.7)}
        />
        <Suspense fallback>
          <Stats />
          <pointLight intensity={1} position={[10,10,0]} lookAt={[0,0,0]} />
          <ambientLight intensity={exposure} color={"#f2f2f2"} />
          <Effects  >
            <unrealBloomPass
            intensity={exposure}
             strength={bloomStrength}
             radius={bloomRadius}
             />
          </Effects>
           {/* <pointLight
            intensity={1}
            castShadow
            position={[3, 1, 1]}
            shadow-mapSize={[512, 512]}
            shadow-bias={-0.0001}
            color={"yellow"}
          /> */}
          <Env/>
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default function EnvironmentTest() {
  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Initial />
        {/* <Test/> */}
      </div>
    </>
  );
}
