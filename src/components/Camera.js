import React, {useRef, useEffect} from 'react';
import {useThree} from 'react-three-fiber'

const Camera = () => {
  const camera = useRef()
  const { aspect, size, setDefaultCamera } = useThree()
  const pixelToThreeUnitRatio = 1
  const planeDistance = 0
  const cameraDistance = 500
  const distance = cameraDistance - planeDistance
  const height = size.height / pixelToThreeUnitRatio
  const halfFovRadians = Math.atan((height / 2) / distance)
  const fov = 2 * halfFovRadians * (180/Math.PI)
  useEffect(() => void setDefaultCamera(camera.current), [])
  return <perspectiveCamera
    ref={camera}
    aspect={aspect}
    fov={fov}
    position={[0, 180, cameraDistance]}
    onUpdate={self => self.updateProjectionMatrix()}
  />
}

export default Camera
