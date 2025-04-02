import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/MiConv.com__Rumba Dancing.glb"
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="RootNode">
          <group
            name="mixamorigHips_$AssimpFbx$_Translation"
            position={[0, 104.27, 1.55]}
          >
            <group
              name="mixamorigHips_$AssimpFbx$_PreRotation"
              rotation={[0.01, 0, 0]}
            >
              <primitive object={nodes.mixamorigHips} />
            </group>
          </group>
          <skinnedMesh
            name="Beta_Surface"
            geometry={nodes.Beta_Surface.geometry}
            material={materials.Beta_HighLimbsGeoSG3}
            skeleton={nodes.Beta_Surface.skeleton}
          />
          <skinnedMesh
            name="Beta_Joints"
            geometry={nodes.Beta_Joints.geometry}
            material={materials.Beta_Joints_MAT1}
            skeleton={nodes.Beta_Joints.skeleton}
          />
        </group>
      </group>
    </group>
  );
}
