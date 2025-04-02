import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
//https://threejsfundementals.org/threejs/resources/models/cartoon_lowpoly_small_city_free_pack/scene.gltf
//../assets/models/Room.glb
import glbPath from '../assets/models/Room.glb';
export default function Model(props) {
  const { nodes, materials } = useGLTF(
    glbPath
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.White}
        scale={[4, 0.2, 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bed_frame.geometry}
        material={materials.Frame}
        position={[-2.66014838, 0.20345283, 2.20565557]}
      />
      <group position={[-2.66014838, 0.8746646, 2.20565557]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_1.geometry}
          material={materials.Pillow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_2.geometry}
          material={materials.Blanket}
        />
      </group>
      <group position={[-2.66014838, 1.33713806, 3.59854531]}>
        <mesh
          
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials.Blanket}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_1.geometry}
          material={materials.Pillow}
        />
      </group>
      <group position={[-0.00718761, 0.20445707, 3.48577857]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials.Frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials.Blanket}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_2.geometry}
          material={materials["Pin picture.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pillow001.geometry}
        material={materials.Pillow}
        position={[0.15335533, 1.23907042, 3.64880109]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pillow002.geometry}
        material={materials.Pillow}
        position={[0.58980232, 1.2853452, 3.77083063]}
        rotation={[-1.18034076, 0.14257759, 0.1295619]}
      />
      <group position={[2.62992215, 0.20444, 3.65748692]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials.Frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_1.geometry}
          material={materials["Pin picture.001"]}
        />
      </group>
      <group position={[-3.22992206, 0.19826399, -1.5410521]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials.Frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017_1.geometry}
          material={materials["Pin picture.001"]}
        />
      </group>
      <group position={[3.37822652, 1.88017392, 3.67465186]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020_1.geometry}
          material={materials.Red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020_2.geometry}
          material={materials.Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020_3.geometry}
          material={materials.Yellow}
        />
      </group>
      <group position={[2.58713651, 2.61174297, 3.68161511]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_1.geometry}
          material={materials.Yellow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_2.geometry}
          material={materials.Red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_3.geometry}
          material={materials.Blue}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Coffe_table.geometry}
        material={materials.Frame}
        position={[1.19706082, 0.5539006, -0.88058358]}
      />
      <group
        position={[1.18600142, 0.20809324, -0.87057549]}
        rotation={[0, 0.4545607, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.Pillow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials.White}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cushion.geometry}
        material={materials.Blanket}
        position={[2.77234936, 0.2816, -0.84841329]}
        rotation={[0, 0.34864788, 0]}
      />
      <group position={[3.39399028, 1.27121353, 3.67180443]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028_1.geometry}
          material={materials.Red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028_2.geometry}
          material={materials.Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028_3.geometry}
          material={materials.Yellow}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cushion001.geometry}
        material={materials.Blanket}
        position={[1.41578114, 0.2816, -2.39116812]}
        rotation={[-Math.PI, 1.40276196, -Math.PI]}
      />
      <group position={[-3.56832027, 0.17358312, -3.31336617]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube035.geometry}
          material={materials.Blanket}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube035_1.geometry}
          material={materials.Pillow}
        />
      </group>
      <group position={[2.4959352, 1.87691545, 3.67180443]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube040.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube040_1.geometry}
          material={materials.Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube040_2.geometry}
          material={materials.Red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube040_3.geometry}
          material={materials.Yellow}
        />
      </group>
      <group position={[-1.7378217, 1.05733621, -1.2539705]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube052.geometry}
          material={materials.Blanket}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube052_1.geometry}
          material={materials.Frame}
        />
      </group>
      <group position={[1.68662, 0.66732955, -0.80302441]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_1.geometry}
          material={materials.Coffe}
        />
      </group>
      <group position={[1.30594325, 0.68359959, -1.45419526]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_1.geometry}
          material={materials.Coffe}
        />
      </group>
      <group
        position={[2.56824946, 1.4906987, 3.64638066]}
        rotation={[0, 0.31545967, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials.Frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_1.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_2.geometry}
          material={materials["Pin picture.002"]}
        />
      </group>
      <group
        position={[1.91107869, 1.4906987, 3.64638066]}
        rotation={[0, -0.35395796, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={materials.Frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_1.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_2.geometry}
          material={materials["Pin picture"]}
        />
      </group>
      <group position={[-3.65363908, 1.44396567, -1.05625117]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={materials.Pillow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021_1.geometry}
          material={materials["Pin picture.001"]}
        />
      </group>
      <group position={[-2.95259905, 1.44076586, -1.10539949]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={materials.Pillow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023_1.geometry}
          material={materials["Pin picture.001"]}
        />
      </group>
      <group position={[-3.65929985, 1.44494319, -2.44219851]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.Coffe}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials.Blanket}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials.Leaves}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_3.geometry}
          material={materials.Frame}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall.geometry}
        material={materials.White}
      />
      <group position={[-4.00410271, 3.05138493, -1.3244251]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube050.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube050_1.geometry}
          material={materials["Pin picture"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube050_2.geometry}
          material={materials.Frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube050_3.geometry}
          material={materials.Board}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube050_4.geometry}
          material={materials.Red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube050_5.geometry}
          material={materials["Pin picture.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube050_6.geometry}
          material={materials.Yellow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube050_7.geometry}
          material={materials["Pin picture.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube050_8.geometry}
          material={materials.Blue}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wallshelf.geometry}
        material={materials.Frame}
        position={[-3.76982236, 3.25022054, 2.26920748]}
      />
      <group position={[-3.71714115, 3.19284487, 2.86683774]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials.Red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group position={[-3.74019909, 2.78994298, 1.65706277]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials.Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group position={[0.03766482, 2.93216324, 4.27579021]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials.Frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials.Material}
        />
      </group>
    </group>
  );
}

// useGLTF.preload("/uploads_files_3844681_Another+bedroom.glb");