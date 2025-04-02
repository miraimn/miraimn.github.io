import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import ModelPath from "../../assets/models/NewEnv/new env.glb";
import { useFrame } from "react-three-fiber";
import {
  AniAction,
  InfiniteScaleAniAction,
  Rotate,
  RotateY,
} from "../../HAKU/HakuThreeAni";
import { GradientAlpha } from "../../views/HakuTest";

export default function Model2(props) {
  const { nodes, materials } = useGLTF(ModelPath);
  const cube1 = useRef();
  const cube2 = useRef();
  const cube3 = useRef();
  useEffect(() => {
    Rotate();
  }, []);
  function Rotate() {
    RotateY(0, cube1, 360, false, 1, () => Rotate);
  }
  useFrame((state, delta) => {
    AniAction[0](cube1, delta);
    AniAction[0](cube2, delta);
    AniAction[0](cube3, delta);
  });
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Cubes" position={[-10.48, 0, -17.95]} ref={cube1}>
          <mesh
            name="Cube"
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            position={[0, 2.47, 0]}
            rotation={[0.63, 0, -Math.PI / 4]}
          >
            <meshLambertMaterial
              color={"#010410"}
              toneMapped={false}
            ></meshLambertMaterial>
          </mesh>
          <mesh
            name="Torus"
            castShadow
            receiveShadow
            geometry={nodes.Torus.geometry}
          >
            <meshLambertMaterial
              color={"#ff0000"}
              toneMapped={false}
            ></meshLambertMaterial>
          </mesh>
        </group>
        <group name="Cubes001" position={[10.48, 0, -17.95]} ref={cube2}>
          <mesh
            name="Cube_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            position={[0, 2.47, 0]}
            rotation={[0.63, 0, -Math.PI / 4]}
          >
            <meshLambertMaterial
              color={"#010410"}
              toneMapped={false}
            ></meshLambertMaterial>
          </mesh>
          <mesh
            name="Torus_1"
            castShadow
            receiveShadow
            geometry={nodes.Torus_1.geometry}
          >
            <meshLambertMaterial
              color={"#ff0000"}
              toneMapped={false}
            ></meshLambertMaterial>
          </mesh>
        </group>
        <group name="Cubes002" ref={cube3}>
          <mesh
            name="Cube_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            position={[0, 2.47, 0]}
            rotation={[0.63, 0, -Math.PI / 4]}
          >
            <meshLambertMaterial
              color={"#010410"}
              toneMapped={false}
            ></meshLambertMaterial>
          </mesh>
          <mesh
            name="Torus_2"
            castShadow
            receiveShadow
            geometry={nodes.Torus_2.geometry}
          >
            <meshLambertMaterial
              color={"#ff0000"}
              toneMapped={false}
            ></meshLambertMaterial>
          </mesh>
        </group>
        <group name="Pic" position={[0, 0, -11.71]}>
          <group name="Cube003" scale={[2.4, 0.06, 1]}>
            <mesh
              name="Cube005"
              castShadow
              receiveShadow
              geometry={nodes.Cube005.geometry}
            >
              <meshLambertMaterial
                color={"#030303"}
                toneMapped={true}
              ></meshLambertMaterial>
            </mesh>
            <mesh
              name="Cube005_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube005_1.geometry}
            >
              <meshLambertMaterial color={"#101010"}></meshLambertMaterial>
            </mesh>
          </group>
        </group>
        <group name="tables" position={[0.26, 0, -24.87]}>
          <group name="Cube001" scale={[1, 0.47, 1]}>
            <mesh
              name="Cube003_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube003_1.geometry}
            >
              <meshLambertMaterial
                color={"#00ffff"}
                transparent
              ></meshLambertMaterial>
            </mesh>
          </group>
          <GradientAlpha
            position={[0, 1.5, 0]}
            scale={[1, 3, 1]}
            valueNum={2.5}
            r={0.0}
            g={1.0}
            b={1.0}
            height={0.5}
          ></GradientAlpha>
        </group>
        <group name="tables001" position={[-8.74, 0, -6.99]}>
          <group name="Cube001_1" scale={[1, 0.47, 1]}>
            <mesh
              name="Cube003_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube003_1.geometry}
              material={materials.main}
            >
              <meshLambertMaterial color={"#00ffff"}></meshLambertMaterial>
            </mesh>
            
          </group>
          <GradientAlpha
            position={[0, 1.5, 0]}
            scale={[1, 3, 1]}
            valueNum={2.5}
            r={0.0}
            g={1.0}
            b={1.0}
            height={0.5}
          ></GradientAlpha>
        </group>
        <group name="tables002" position={[10.35, 0, -7.77]}>
          <group name="Cube001_2" scale={[1, 0.47, 1]}>
            <mesh
              name="Cube003_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube003_1.geometry}
              material={materials.main}
            >
              <meshLambertMaterial color={"#00ffff"}></meshLambertMaterial>
            </mesh>
          </group>
          <GradientAlpha
            position={[0, 1.5, 0]}
            scale={[1, 3, 1]}
            valueNum={2.5}
            r={0.0}
            g={1.0}
            b={1.0}
            height={0.5}
          ></GradientAlpha>
        </group>
      </group>
    </group>
  );
}
