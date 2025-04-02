import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import ModelPath from '../../assets/models/NewEnv/new env.glb'

export default function Model2(props) {
  const { nodes, materials } = useGLTF(ModelPath);
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Cubes" position={[-10.48, 0, -17.95]}>
          <mesh
            name="Cube"
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials.Cube}
            position={[0, 2.47, 0]}
            rotation={[0.63, 0, -Math.PI / 4]}
          />
          <mesh
            name="Torus"
            castShadow
            receiveShadow
            geometry={nodes.Torus.geometry}
            material={materials.Circle}
          />
        </group>
        <group name="Cubes001" position={[10.48, 0, -17.95]}>
          <mesh
            name="Cube_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={materials.Cube}
            position={[0, 2.47, 0]}
            rotation={[0.63, 0, -Math.PI / 4]}
          />
          <mesh
            name="Torus_1"
            castShadow
            receiveShadow
            geometry={nodes.Torus_1.geometry}
            material={materials.Circle}
          />
        </group>
        <group name="Cubes002">
          <mesh
            name="Cube_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            material={materials.Cube}
            position={[0, 2.47, 0]}
            rotation={[0.63, 0, -Math.PI / 4]}
          />
          <mesh
            name="Torus_2"
            castShadow
            receiveShadow
            geometry={nodes.Torus_2.geometry}
            material={materials.Circle}
          />
        </group>
        <group name="Pic" position={[0, 0, -11.71]}>
          <group name="Cube003" scale={[2.4, 0.06, 1]}>
            <mesh
              name="Cube005"
              castShadow
              receiveShadow
              geometry={nodes.Cube005.geometry}
              material={materials.dark}
            />
            <mesh
              name="Cube005_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube005_1.geometry}
              material={materials.light}
            />
          </group>
        </group>
        <group name="tables" position={[0.26, 0, -24.87]}>
          <group name="Cube001" scale={[1, 0.47, 1]}>
            <mesh
              name="Cube003_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube003_1.geometry}
              material={materials.main}
            />
            <mesh
              name="Cube003_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube003_2.geometry}
              material={materials.inner}
            />
          </group>
          <mesh
            name="Cube002"
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={nodes.Cube002.material}
            position={[0, 0.16, 0]}
            scale={[0.7, 0.01, 0.7]}
          />
        </group>
        <group name="tables001" position={[-8.74, 0, -6.99]}>
          <group name="Cube001_1" scale={[1, 0.47, 1]}>
            <mesh
              name="Cube003_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube003_1.geometry}
              material={materials.main}
            />
            <mesh
              name="Cube003_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube003_2.geometry}
              material={materials.inner}
            />
          </group>
          <mesh
            name="Cube002_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={nodes.Cube002_1.material}
            position={[0, 0.16, 0]}
            scale={[0.7, 0.01, 0.7]}
          />
        </group>
        <group name="tables002" position={[10.35, 0, -7.77]}>
          <group name="Cube001_2" scale={[1, 0.47, 1]}>
            <mesh
              name="Cube003_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube003_1.geometry}
              material={materials.main}
            />
            <mesh
              name="Cube003_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube003_2.geometry}
              material={materials.inner}
            />
          </group>
          <mesh
            name="Cube002_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_2.geometry}
            material={nodes.Cube002_2.material}
            position={[0, 0.16, 0]}
            scale={[0.7, 0.01, 0.7]}
          />
        </group>
      </group>
    </group>
  );
}