
import React, { useRef,useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import ModelPath from '../../assets/models/EarthTest/untitled1.glb'
import * as THREE from "three";
import { DoubleSide } from "three";
import { AniAction, RotateY } from "../../HAKU/HakuThreeAni";


export function Model(props) {
  
  const color = new THREE.Color("#00ff0000") ;
  const color2 = new THREE.Color("#ff5555") ;

  const outerMaybe = useRef();
  const inner = useRef();
  const [postionsY, setPositionY] = useState(false)
  const cube = useRef([]);
  useFrame((state,delta)=>{
      // const t = (1 + Math.sin(state.clock.elapsedTime * 2)) / 2
      // inner.current.color.setRGB(2, 2, 20 + t * 10)
    AniAction[0](outerMaybe, delta)
  })

function Start(){
  console.log("123");
  RotateY(0, outerMaybe, 360,false,1)
  RotateY(1, outerMaybe, 360,false,0.1)
  RotateY(2, outerMaybe, 360,false,2)
}
  const { nodes, materials } = useGLTF(ModelPath);
  return (
    <group {...props} dispose={null}  ref={outerMaybe} onClick={() => {Start();}} >
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Sphere002_1.geometry}
        // material={materials.bosoo}
      >
        <meshLambertMaterial toneMapped={false} color={color} roughness={1} side={DoubleSide}/>
      </mesh>
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Sphere002_2.geometry}
        // material={materials.hundlun}
        
      >
        <meshLambertMaterial 
        toneMapped={false}
        color={color2} 
        roughness={1}
         side={DoubleSide}/>
      </mesh>
      {/* <mesh
      ref={outerMaybe}
        name="Sphere002_1"
        castShadow
        receiveShadow
        geometry={nodes.Sphere002_1.geometry}
      onClick={() =>{Start();}}
      >
        <meshStandardMaterial color={color} roughness={1} side={DoubleSide}/>
      </mesh> */}
    </group>
  );
}

// useGLTF.preload("/untitled.glb");