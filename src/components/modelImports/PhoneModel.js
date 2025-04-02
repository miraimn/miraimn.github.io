import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/minimal_smart_phone.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[-419.39, 879.48, 34.01]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Metallic_phone_0.geometry}
              material={materials.Metallic_phone}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Screen_0.geometry}
              material={materials.Screen}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Camera_0.geometry}
              material={materials.Camera}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/minimal_smart_phone.glb");
