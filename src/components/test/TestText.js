import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "../../assets/models/haku/text.glb"



export function TestText(props) {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null} position={props.position}>
      <group name="Scene">
        <mesh
          name="dfg"
          castShadow
          receiveShadow
          geometry={nodes.dfg.geometry}
          scale={[1, 2.62, 1]}
        >
            <meshLambertMaterial color={"#070720"}></meshLambertMaterial>
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload(model);
