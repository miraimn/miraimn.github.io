import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "../../assets/models/haku/board1.glb";

const cylMaterial = (
  <meshLambertMaterial
    color={"#0101ff"}
    toneMapped={false}
  ></meshLambertMaterial>
);
const sphereMaterial = (
  <meshLambertMaterial
    color={"#3550ff"}
    toneMapped={false}
  ></meshLambertMaterial>
);
const planeMaterial = (
  <meshBasicMaterial
    // color={"#14115a"}
    // toneMapped={false}
    transparent
    opacity={0}
  ></meshBasicMaterial>
);

export function Board(props) {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null} position={props.position} scale={props.scale} rotation={props.rotation}>
      <group name="Scene">
        <mesh
          name="Cylinder"
          geometry={nodes.Cylinder.geometry}
          position={[0.1, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.02, 9, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder001"
          geometry={nodes.Cylinder001.geometry}
          position={[-0.1, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.02, 9, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder002"
          geometry={nodes.Cylinder002.geometry}
          position={[-1.09, 0, 6.81]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.02, 1.09, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder003"
          geometry={nodes.Cylinder003.geometry}
          position={[-0.77, 0, 5.28]}
          rotation={[Math.PI / 2, 0, 0.64]}
          scale={[0.02, 1.12, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder004"
          geometry={nodes.Cylinder004.geometry}
          position={[-1.7, 0, 8.46]}
          rotation={[Math.PI / 2, 0, 0.81]}
          scale={[0.02, 0.85, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder005"
          
          geometry={nodes.Cylinder005.geometry}
          position={[-2.02, 0, 6.17]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.02, 0.6, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder006"
          
          geometry={nodes.Cylinder006.geometry}
          position={[-6.47, 0, 4.06]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.02, 1.56, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder007"
          
          geometry={nodes.Cylinder007.geometry}
          position={[-3.77, 0, 5.12]}
          rotation={[Math.PI / 2, 0, -0.83]}
          scale={[0.02, 1.57, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder008"
          
          geometry={nodes.Cylinder008.geometry}
          position={[-2.02, 0, 5.85]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.02, 0.6, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder010"
          
          geometry={nodes.Cylinder010.geometry}
          position={[-0.54, 0, -3.54]}
          rotation={[Math.PI / 2, 0, -0.84]}
          scale={[0.02, 0.6, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder009"
          
          geometry={nodes.Cylinder009.geometry}
          position={[-2.2, 0, -3.93]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.02, 1.23, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder011"
          
          geometry={nodes.Cylinder011.geometry}
          position={[-5.22, 0, -5.01]}
          rotation={[Math.PI / 2, 0, -1.03]}
          scale={[0.02, 2.1, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder012"
          
          geometry={nodes.Cylinder012.geometry}
          position={[-7.51, 0, -6.1]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.02, 0.5, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder013"
          
          geometry={nodes.Cylinder013.geometry}
          position={[-1.4, 0, -5.12]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.02, 1.19, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder014"
          
          geometry={nodes.Cylinder014.geometry}
          position={[-6.81, 0, -8.06]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.02, 1.19, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder015"
          
          geometry={nodes.Cylinder015.geometry}
          position={[-4.16, 0, -7.17]}
          rotation={[Math.PI / 2, 0, -1.03]}
          scale={[0.02, 1.72, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder016"
          
          geometry={nodes.Cylinder016.geometry}
          position={[-2.05, 0, -6.29]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.02, 0.65, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder017"
          
          geometry={nodes.Cylinder017.geometry}
          position={[-0.54, 0, -3.94]}
          rotation={[Math.PI / 2, 0, -0.84]}
          scale={[0.02, 0.6, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder018"
          
          geometry={nodes.Cylinder018.geometry}
          position={[-2.05, 0, -6.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.02, 0.26, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder019"
          
          geometry={nodes.Cylinder019.geometry}
          position={[-6.52, 0, -8.51]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.02, 0.88, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder020"
          
          geometry={nodes.Cylinder020.geometry}
          position={[-4.5, 0, -7.82]}
          rotation={[Math.PI / 2, 0, -1.03]}
          scale={[0.02, 1.34, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder021"
          
          geometry={nodes.Cylinder021.geometry}
          position={[0.3, 0, 6.51]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.02, 2.49, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder022"
          
          geometry={nodes.Cylinder022.geometry}
          position={[0.86, 0, 3.4]}
          rotation={[Math.PI / 2, 0, 0.72]}
          scale={[0.02, 0.86, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder023"
          
          geometry={nodes.Cylinder023.geometry}
          position={[1.42, 0, 0.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.02, 1.93, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder024"
          
          geometry={nodes.Cylinder024.geometry}
          position={[2.28, 0, 2.77]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.02, 0.87, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder025"
          
          geometry={nodes.Cylinder025.geometry}
          position={[7.13, 0, -0.22]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.02, 0.87, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder026"
          
          geometry={nodes.Cylinder026.geometry}
          position={[4.7, 0, 1.28]}
          rotation={[Math.PI / 2, 0, -2.33]}
          scale={[0.02, 2.17, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder027"
          
          geometry={nodes.Cylinder027.geometry}
          position={[0.76, 0, 1.93]}
          rotation={[Math.PI / 2, 0, 0.72]}
          scale={[0.02, 1, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder028"
          
          geometry={nodes.Cylinder028.geometry}
          position={[0.76, 0, 2.64]}
          rotation={[Math.PI / 2, 0, 0.72]}
          scale={[0.02, 0.51, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder029"
          
          geometry={nodes.Cylinder029.geometry}
          position={[3.18, 0, -0.94]}
          rotation={[Math.PI / 2, 0, -2.33]}
          scale={[0.02, 2.43, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder030"
          
          geometry={nodes.Cylinder030.geometry}
          position={[6.49, 0, -2.61]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.02, 1.57, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder031"
          
          geometry={nodes.Cylinder031.geometry}
          position={[6.49, 0, -3.59]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.02, 1.57, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder032"
          
          geometry={nodes.Cylinder032.geometry}
          position={[3.18, 0, -1.92]}
          rotation={[Math.PI / 2, 0, -2.33]}
          scale={[0.02, 2.43, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder033"
          
          geometry={nodes.Cylinder033.geometry}
          position={[5.1, 0, 1.55]}
          rotation={[Math.PI / 2, 0, -2.33]}
          scale={[0.02, 1.09, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Cylinder034"
          
          geometry={nodes.Cylinder034.geometry}
          position={[0.96, 0, 0.3]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.02, 0.85, 0.02]}
        >
          {cylMaterial}
        </mesh>
        <mesh
          name="Sphere001"
          
          geometry={nodes.Sphere001.geometry}
          position={[0.96, 0, 1.17]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere002"
          
          geometry={nodes.Sphere002.geometry}
          position={[1.13, 0, 2.21]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere003"
          
          geometry={nodes.Sphere003.geometry}
          position={[0.38, 0, 3.07]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere004"
          
          geometry={nodes.Sphere004.geometry}
          position={[4.27, 0, 2.36]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere005"
          
          geometry={nodes.Sphere005.geometry}
          position={[5.93, 0, 0.76]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere006"
          
          geometry={nodes.Sphere006.geometry}
          position={[1.43, 0, -1.1]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere007"
          
          geometry={nodes.Sphere007.geometry}
          position={[1.43, 0, 0.74]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere008"
          
          geometry={nodes.Sphere008.geometry}
          position={[1.43, 0, -0.26]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere009"
          
          geometry={nodes.Sphere009.geometry}
          position={[1.43, 0, 1.24]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere010"
          
          geometry={nodes.Sphere010.geometry}
          position={[1.43, 0, 2.78]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere011"
          
          geometry={nodes.Sphere011.geometry}
          position={[7.91, 0, -0.21]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere012"
          
          geometry={nodes.Sphere012.geometry}
          position={[7.91, 0, -2.6]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere013"
          
          geometry={nodes.Sphere013.geometry}
          position={[7.91, 0, -3.6]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere014"
          
          geometry={nodes.Sphere014.geometry}
          position={[0.1, 0, 2.65]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere015"
          
          geometry={nodes.Sphere015.geometry}
          position={[-0.11, 0, 4.4]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere016"
          
          geometry={nodes.Sphere016.geometry}
          position={[-0.11, 0, 8.9]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere016.1"
          
          geometry={nodes.Sphere016.geometry}
          position={[-0.11, 0, -8.9]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere017"
          
          geometry={nodes.Sphere017.geometry}
          position={[0.1, 0, 8.9]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere017.1"
          
          geometry={nodes.Sphere017.geometry}
          position={[0.1, 0, -8.9]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere018"
          
          geometry={nodes.Sphere018.geometry}
          position={[0.32, 0, 8.9]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere019"
          
          geometry={nodes.Sphere019.geometry}
          position={[-2.22, 0, 8.9]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere020"
          
          geometry={nodes.Sphere020.geometry}
          position={[-1.11, 0, 5.71]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere021"
          
          geometry={nodes.Sphere021.geometry}
          position={[-2.6, 0, 5.85]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere022"
          
          geometry={nodes.Sphere022.geometry}
          position={[-1.43, 0, 5.85]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere023"
          
          geometry={nodes.Sphere023.geometry}
          position={[-7.91, 0, 4.05]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere024"
          
          geometry={nodes.Sphere024.geometry}
          position={[-0.1, 0, -3.13]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere025"
          
          geometry={nodes.Sphere025.geometry}
          position={[-0.1, 0, -3.54]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere026"
          
          geometry={nodes.Sphere026.geometry}
          position={[-0.99, 0, -4.34]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere027"
          
          geometry={nodes.Sphere027.geometry}
          position={[-2.4, 0, -6.59]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere028"
          
          geometry={nodes.Sphere028.geometry}
          position={[-1.4, 0, -3.95]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere029"
          
          geometry={nodes.Sphere029.geometry}
          position={[-1.69, 0, -6.59]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere030"
          
          geometry={nodes.Sphere030.geometry}
          position={[-3.27, 0, -7.09]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere031"
          
          geometry={nodes.Sphere031.geometry}
          position={[-7.48, 0, -8.51]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere032"
          
          geometry={nodes.Sphere032.geometry}
          position={[-7.9, 0, -8.06]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Sphere033"
          
          geometry={nodes.Sphere033.geometry}
          position={[-7.9, 0, -6.1]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
        <mesh
          name="Plane"
          geometry={nodes.Plane.geometry}
          scale={[12, 1, 12]}
        >
          {planeMaterial}
        </mesh>
        <mesh
          name="Sphere"
          
          geometry={nodes.Sphere.geometry}
          position={[0.96, 0, -0.63]}
          scale={0.1}
        >
          {sphereMaterial}
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("model");
