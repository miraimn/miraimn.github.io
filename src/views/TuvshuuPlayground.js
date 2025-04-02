import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Suspense, useEffect } from "react";
import ChairModel from "./TuvshuuModels";
import glbPath from "../assets/models/Room.glb";
import Robot from "./Robot";
import Robo from "./Robo";
import robotPath from "../assets/models/RumbaDancingWithAnimation.glb";
import {
  OrbitControls,
  Sky,
  ScrollControls,
  useScroll,
  useGLTF,
  useAnimations,
} from "@react-three/drei";

export default function Scene() {
  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas dpr={[1, 2]}>
          <Sky
            scale={1000}
            sunPosition={[2, 0.4, 10]}
            shadows
            camera={{ position: [0, 5, 2], near: 0.1, far: 100 }}
          />
          {/* <fog attach="fog" args={["#ff5020", 5, 18]} /> */}
          <ambientLight intensity={0.5} />
          <directionalLight />
          <Suspense fallback={null}>
            <ScrollControls>
              <RoboV1 position={[0, -2, -3]} rotation={[0, -180, 0]} />
              <RobotV1 position={[0, -1.8, -3.5]} rotation={[0, 117.5, 0]} />
              {/* <boxGeometry args={[2, 2, 2]} /> */}
              {/* <Model /> */}
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
      <div style={{ height: "100vh" }}></div>
      <div style={{ height: "100vh" }}></div>
    </>
  );
}

function RoboV1({ ...props }) {
  // This hook gives you offets, ranges and other useful things
  const scroll = useScroll();
  const { scene } = useGLTF(glbPath);
  //   const { actions } = useAnimations(animations, scene);
  //   useLayoutEffect(() =>
  //     Object.values(nodes).forEach(
  //       (node) => (node.receiveShadow = node.castShadow = true)
  //     )
  //   );
  //   useEffect(() => void (actions["Take 001"].play().paused = true), [actions]);
  useFrame((state, delta) => {
    // const action = actions["Take 001"];
    // The offset is between 0 and 1, you can apply it to your models any way you like
    const offset = 1 - scroll.offset;
    // action.time = THREE.MathUtils.damp(
    //   action.time,
    //   (action.getClip().duration / 2) * offset,
    //   100,
    //   delta
    // );
    state.camera.position.set(
      Math.sin(offset) * -10,
      Math.atan(offset * Math.PI * 2) * 5,
      Math.cos((offset * Math.PI) / 3) * -10
    );
    state.camera.lookAt(0, 0, 0);
  });
  return <primitive object={scene} {...props} />;
}

function RobotV1({ ...props }) {
  // This hook gives you offets, ranges and other useful things
  const scroll = useScroll();
  const { scene, animations } = useGLTF(robotPath);
  const { actions } = useAnimations(animations, scene);
  //   useLayoutEffect(() =>
  //     Object.values(nodes).forEach(
  //       (node) => (node.receiveShadow = node.castShadow = true)
  //     )
  //   );
  // useEffect(() => void (actions["Take 001"].play().paused = true), [actions]);
  useFrame((state, delta) => {
    // const action = actions["Take 001"];
    // The offset is between 0 and 1, you can apply it to your models any way you like
    const offset = 1 - scroll.offset;
    // action.time = THREE.MathUtils.damp(
    //   action.time,
    //   (action.getClip().duration / 2) * offset,
    //   100,
    //   delta
    // );
    state.camera.position.set(
      Math.sin(offset) * -10,
      Math.atan(offset * Math.PI * 2) * 5,
      Math.cos((offset * Math.PI) / 3) * -10
    );
    state.camera.lookAt(0, 0, 0);
  });
  return <primitive object={scene} {...props} />;
}
