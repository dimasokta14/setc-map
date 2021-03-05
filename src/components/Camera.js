import React, {useRef, useEffect} from 'react';
import {useFrame, useThree} from 'react-three-fiber';
import * as THREE from 'three'
import { CameraHelper, MathUtils } from 'three';
import {useHelper} from 'drei'
import {a} from '@react-spring/three'
import Pan from '../helpers/usePan'


const Camera = () => {
  const camera = useRef()
  const { aspect, size, setDefaultCamera } = useThree()
  const pixelToThreeUnitRatio = 1
  const planeDistance = 0
  const cameraDistance = 200
  const distance = cameraDistance - planeDistance
  const height = size.height / pixelToThreeUnitRatio
  const halfFovRadians = Math.atan((height / 2) / distance)
  const fov = 2 * halfFovRadians * (180/Math.PI)

  const [x] = Pan([-100, 2400], {domTarget: window})

  // useHelper(camera, CameraHelper, 10, 'hotpink')

  useEffect(() => void setDefaultCamera(camera.current), [])
  useFrame(() => {
    // camera.current.left = -5*aspect
    camera.current && camera.current.updateMatrixWorld()
  })
  // const updateCamera = (self) => {
  //   // camera.current.left = -5*aspect
  //   // camera.left =-5*aspect
  //   console.log(camera)
  //   camera.current && camera.current.updateProjectionMatrix()
  // }
  // return <perspectiveCamera
  //   ref={camera}
  //   aspect={aspect}
  //   fov={45}
  //   position={[0, 100, cameraDistance]}
  //   // onUpdate={self => self.updateProjectionMatrix()}
  //   onUpdate={self => updateCamera}
  //   // filmOffset={20}
  // />
  return(
    <a.perspectiveCamera
      makeDefault
      ref={camera}
      aspect={aspect}
      fov={45}
      position={[0, 100, cameraDistance]}
      // position-z={y.to((y) => (y / 500) * 25)}
      // onUpdate={updateCamera}
    />
  )
}

export default Camera
