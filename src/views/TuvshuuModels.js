import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import chairModel from "../assets/models/Chair.glb";

export default function ChairModel(props) {
  const { nodes, materials } = useGLTF(chairModel);
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.01, 0.35, -1.39]}
        rotation={[1.57, 0, 0]}
        scale={1.46}
      >
        <group rotation={[Math.PI, 0, 0]} scale={0}>
          <group position={[201.19, -958.16, -156.98]} scale={5.53}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["01_Wood_Material_#3_0"].geometry}
              material={materials.Material_3}
            />
          </group>
          <group position={[31.05, -1027.8, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["02_Base_Material_#2_0"].geometry}
              material={materials.Material_2}
            />
          </group>
          <group position={[31.05, -1027.8, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Object001_Material_#5_0"].geometry}
              material={materials.Material_5}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

// useGLTF.preload("/Chair.glb");
