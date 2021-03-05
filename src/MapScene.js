import * as THREE from 'three'
import { render } from 'react-dom'
import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame} from 'react-three-fiber'
import {useGLTF} from '@react-three/drei'

const DEFAULT_LAYER = 0
const OCCLUSION_LAYER = 1

const Map = ({layer = DEFAULT_LAYER}) => {
  const group = useRef()
  const {nodes} = useGLTF('./assets/house.glb')

  const material = useMemo(() => {
    if (layer === DEFAULT_LAYER) return new THREE.MeshStandardMaterial({ color: new THREE.Color('#2a2a2a'), roughness: 1, metalness: 0.9 })
    else return new THREE.MeshBasicMaterial({ color: new THREE.Color('black') })
  }, [layer])

  useFrame(() => (group.current.rotation.y += 0.004))

  return (
    <group ref={group}>
      <group rotation={[-1.5707963267948963, 0, 0]} position={[0, 2, 0]}>
        <mesh geometry={nodes.mesh_0.geometry} material={material} layers={layer} receiveShadow castShadow></mesh>
        <mesh geometry={nodes.mesh_1.geometry} material={material} layers={layer} receiveShadow castShadow></mesh>
        <mesh geometry={nodes.mesh_2.geometry} material={material} layers={layer} receiveShadow castShadow></mesh>
      </group>
    </group>
  )
}

const MapScene = () => {
  return (
    <Canvas shadowMap style={{ background: '#8e8e8e', height:'100vh' }} camera={{ position: [0, 10, 12], fov: 50 }} gl={{ antialias: false }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 60, -100]} intensity={20} />
      <pointLight position={[-50, 0, -50]} intensity={2} />
      <spotLight castShadow intensity={8} angle={Math.PI / 10} position={[10, 10, 10]} shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
      <mesh position={[0, 4.5, -10]}>
        <sphereBufferGeometry args={[4.9, 32, 32]} />
        <meshBasicMaterial transparent opacity={0.5} />
      </mesh>
      <Suspense fallback={null}>
        <Map />
        {/* <Map layer={OCCLUSION_LAYER} /> */}
      </Suspense>
      {/* <Effects /> */}
    </Canvas>
  )
}

export default MapScene