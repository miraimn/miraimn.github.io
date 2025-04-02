import * as THREE from 'three'
import { useState, useRef, Suspense, useMemo } from 'react'
import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber'
import { Reflector, CameraShake, OrbitControls, useTexture,Html } from '@react-three/drei'
import { KernelSize } from 'postprocessing'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'
import triangesSvg from '../assets/demo/triangle.svg';
import normalMap from '../assets/demo/SurfaceImperfections003_1K_Normal.jpg';
import mapJpeg from '../assets/demo/SurfaceImperfections003_1K_var1.jpg';


function Triangle({ color, ...props }) {
  const ref = useRef()
  const [r] = useState(() => Math.random() * 10000)
  useFrame((_) => (ref.current.position.y = -5 + Math.sin(_.clock.elapsedTime + r) / 10))
  const { paths: [path] } = useLoader(SVGLoader, triangesSvg) // prettier-ignore
  const geom = useMemo(() => SVGLoader.pointsToStroke(path.subPaths[0].getPoints(), path.userData.style), [])
  return (
    <group ref={ref}>
      <mesh geometry={geom} {...props}>
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    </group>
  )
}
function Ground(props) {
  const [floor, normal] = useTexture([mapJpeg, normalMap])
  return (
    <Reflector castShadow={false} resolution={1024} args={[8, 8]} {...props}>
      {(Material, props) => <Material color="#f0f0f0" metalness={0} roughnessMap={floor} normalMap={normal} normalScale={[2, 2]} {...props} />}
    </Reflector>
  )
}

export default function Triangles() {
    return (
      <>
       {/* <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 15] }}>
         <color attach="background" args={['black']} />
         <ambientLight /> */}
         {/* <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} /> */}
         <Suspense fallback={null}>
           {/* <Rig> */}
             <Triangle color="#ff2060" scale={0.009} rotation={[0, 0, Math.PI / 3]} />
             <Triangle color="cyan" scale={0.009} position={[2, 0, -2]} rotation={[0, 0, Math.PI / 3]} />
             <Triangle color="orange" scale={0.009} position={[-2, 0, -2]} rotation={[0, 0, Math.PI / 3]} />
             <Triangle color="white" scale={0.009} position={[0, 2, -10]} rotation={[0, 0, Math.PI / 3]} />
             {/* <Ground mirror={1} blur={[500, 100]} mixBlur={12} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]} position-y={-10} /> */}
           {/* </Rig> */}
          {/* <EffectComposer multisampling={8}>
            <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.8} />
           <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={0} intensity={0.5} />
          </EffectComposer> */}
         </Suspense>
         {/* <CameraShake yawFrequency={0.2} pitchFrequency={0.2} rollFrequency={0.2} /> */}
       {/* </Canvas> */}
      </>
  )
}
