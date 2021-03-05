import React, { useRef } from "react";
import * as THREE from 'three'
import { extend, useThree, useFrame } from "react-three-fiber";
import { MapControls } from "drei";

extend({ MapControls });

const MapController = () => {
  const controlsRef = useRef()
  const {camera,gl, aspect, size, setDefaultCamera } = useThree()

  const pixelToThreeUnitRatio = 1
  const planeDistance = 0
  const cameraDistance = 200
  const distance = cameraDistance - planeDistance
  const height = size.height / pixelToThreeUnitRatio
  const halfFovRadians = Math.atan((height / 2) / distance)

  useFrame(() => {
    let minDistance = 0
    let maxDistance = 0

    // const camera = new THREE.PerspectiveCamera()
    // camera.fov = 45
    // camera.aspect={aspect}
    // camera.left = -5*aspect
    // camera.position.set( 400, 200, 0 )
    // camera.updateProjectionMatrix()
    // let offset = new THREE.Vector3()
    // let quat = new THREE.Quaternion().setFromUnitVectors(10, new THREE.Vector3(0, 1, 0))
    // let quatInverse = quat.clone().inverse()
    // let lastPosition = new THREE.Vector3()
    // let lastQuaternion = new THREE.Quaternion()

    let minPan = new THREE.Vector3(-100, -2, -100)
    let maxPan = new THREE.Vector3(100, 2, 100)
    var scope = this

    controlsRef.current && controlsRef.current.update(minPan, maxPan)
  })

  return(
    <MapControls
      ref={controlsRef}
      args={[gl.domElement]}
      maxPolarAngle={Math.PI/2}
      maxAzimuthAngle={Math.PI/1}
      minDistance={20}
      maxDistance={100}
      panSpeed={2}
      touches={{
        ONE: THREE.TOUCH.DOLLY_PAN, 
        TWO: THREE.TOUCH.ROTATE
      }}
      dampingFactor={0.05}
      enableDamping={false}
      // position={[0, 100, 100]}
    />
  )
}

export default MapController;
