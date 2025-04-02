import React, { Suspense, useMemo, useRef, useState } from "react";
import {
  Environment,
  OrbitControls,
  Stats,
  Trail,
  TransformControls,
  useGLTF,
  shaderMaterial,
} from "@react-three/drei";
import waterModel from "../assets/models/haku/office-water.glb";
import { Canvas, useFrame } from "react-three-fiber";
import { BoxGeometry, Color, DoubleSide, MeshToonMaterial } from "three";
import Robo from "./Robo";
import { Resizer } from "postprocessing";
import {
  AniAction,
  EmptyAniAction,
  InfiniteScaleAniAction,
  InfiniteScale,
  InfiniteScaleAction,
  Move,
  MoveX,
  MoveY,
  Rotate,
  RotateY,
  ScaleAllWithConstant,
  InfiniteMove2Point,
  InfiniteMove2PointAniAction,
} from "../HAKU/HakuThreeAni";
import {
  Bloom,
  EffectComposer,
  Outline,
  Select,
  Selection,
} from "@react-three/postprocessing";
import Shader from "../components/test/Shader";
import { extend } from "lodash";
import Model2 from "../components/test/testGridHaku";
import { Board } from "../components/haku/Board";

const TestShader = shaderMaterial({}, ``, ``);

extend({ TestShader });

const ShaderMaterial = {
  vertexShader: `
    precision mediump float;
    varying vec2 vUv;
    varying vec4 pos;
    void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        pos = vec4(position, 1.);
    }
  `,
  fragmentShader: `
  uniform float num;
  uniform float r;
  uniform float g;
  uniform float b;
  uniform float height;
  varying vec2 vUv;
  varying vec4 pos;
  void main() {
    float y = (pos.y + height) * num;
    gl_FragColor = vec4(r, g, b, 1.0 - y);
  }
  `,
};



var Action2 = () => {};
function TestBox2(props) {
  var ref = useRef();
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  useFrame((state, delta, frame) => {
    if (click) {
      AniAction[0](ref, delta * 5);

      InfiniteMove2PointAniAction[0](ref, delta);
    }
    if (hover) {
      InfiniteScaleAniAction[0](ref, delta);
    }
    AniAction[1](ref, delta);
  });
  function OnPinterEnter() {
    setHover(true);
    InfiniteScale(0, ref, 0.8, 1.5);
    InfiniteMove2Point(0, ref, [0, 0, 0], [2, 2, 2], 3);
  }
  function OnPointerOut() {
    setHover(false);
    ScaleAllWithConstant(1, ref, 1);
  }
  function OnClick() {
    // OnPointerOut();
    setClick(true);
    // MoveY(0, ref, 2, 1, () =>
    //   MoveX(0, ref, 0, 1, () =>
    //     RotateY(0, ref, Math.PI * 2, false, 1, () =>
    //       MoveX(0, ref, 3, 1, () =>
    //         MoveY(0, ref, -3, 1, () =>
    //           MoveX(0, ref, 0, 1, () => {
    //             ScaleAllWithConstant(0, ref, 1.2, 0.1, () =>
    //               ScaleAllWithConstant(0, ref, 1, 0.1, () =>
    //                 RotateY(0, ref, 2 * Math.PI, true, 1, () =>
    //                   MoveX(0, ref, -3, 1, () =>
    //                     MoveY(0, ref, 0, 1, () =>
    //                       EmptyAniAction(() => setClick(false))
    //                     )
    //                   )
    //                 )
    //               )
    //             );
    //           })
    //         )
    //       )
    //     )
    //   )
    // );

    Rotate(
      0,
      ref,
      [Math.PI / 2, Math.PI / 2, Math.PI / 2],
      [false, false, false]
    );
    // Move(0, ref, [3, 3, -3]);
    // Action2 = MoveYTest(ref, 2, 1, () => MoveXTest(ref, 0))
  }
  return (
    <group>
      <Trail
        width={5}
        length={5}
        color={new Color(2, 1, 10)}
        attenuation={(t) => t * t}
      >
        <mesh
          {...props}
          ref={ref}
          position={[-3, 0, 0]}
          rotation={[0, 0, 0]}
          onPointerEnter={OnPinterEnter}
          onPointerOut={OnPointerOut}
          onPointerDown={OnClick}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshToonMaterial color="#33ffff" opacity={0.5} transparent />
        </mesh>
      </Trail>
    </group>
  );
}

export function GradientAlpha(props) {
  const uniforms = useMemo(
    () => ({
      num: {
        value: props.valueNum,
      },
      r: { value: props.r },
      g: { value: props.g },
      b: { value: props.b },
      height: { value: props.height },
    }),
    []
  );
  return (
    <mesh position={props.position} scale={props.scale}>
      <boxGeometry args={[1, 1, 1]}></boxGeometry>
      <shaderMaterial
        transparent
        attach={"material"}
        args={[ShaderMaterial]}
        uniforms={uniforms}
      ></shaderMaterial>
    </mesh>
  );
}

export default function HakuTest() {
  return (
    <div>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas dpr={1}>
          <Stats />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <ambientLight intensity={1} />
          {/* <GradientAlpha
            position={[0, 0, 0]}
            scale={[1, 3, 1]}
            valueNum={2.5}
            r={1.0}
            g={1.0}
            b={0.0}
          ></GradientAlpha> */}
          <Board></Board>
          <OrbitControls></OrbitControls>
        </Canvas>
      </div>
    </div>
  );
}
