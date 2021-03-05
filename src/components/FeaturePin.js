import React, {useMemo, useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types'
import * as THREE from 'three';
import {useFrame} from 'react-three-fiber'


const FeaturePin = ({setRef, position, textureURL, camera, name, id, onClick}) => {

  const previous = useRef();
  const pinRef = useRef()
  const [hover, set] = useState(false)

  const x = 0
  const y = 0
  const hexagon = new THREE.Shape()
  const mouse = new THREE.Vector2()
  const raycaster = new THREE.Raycaster()
  hexagon.moveTo(0, 3);
  hexagon.lineTo(x + 2.5,y + 1.5);
  hexagon.lineTo(x + 2.5, y - 1.5);
  hexagon.lineTo(0, y - 3);
  hexagon.lineTo(x - 2.5, y - 1.5);
  hexagon.lineTo(x - 2.5, y + 1.5);

  const extrudeSettings = {
    depth: 0.5,
    steps: 2,
    bevelEnabled: false,
    bevelThickness: 0.5,
    bevelSize: 1.5,
    bevelSegments: 1
  };

  
  useFrame((state) => {
    pinRef.current.rotation.y = pinRef.current.rotation.y +=0.01
  })



  const handlePointerIn = (e) => {
    set(true)
    document.body.style.cursor = hover ? 'pointer' : 'auto'
  }

  const handlePointerOut = (e) => {
    set(false)
    document.body.style = hover ? 'pointer' : 'auto'
  }

  const pinTexture = useMemo(() => new THREE.TextureLoader().load(textureURL),
    textureURL
  )

  return (
    <mesh
      ref={pinRef}
      position={position}
      castShadow
      onPointerMove={handlePointerIn}
      scale={hover ? [1.5,1.5,1.5] : [1,1,1]}
      onPointerOut={handlePointerOut}
      onClick={onClick}
    >
      <extrudeBufferGeometry attach='geometry' args={[hexagon, extrudeSettings]}/>
      <meshStandardMaterial
        attach='material'
        color={0xffffff}
        roughness={0.25}
        metalness={0}
        map={pinTexture}
      />
    </mesh>
  )
}

FeaturePin.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  textureURL: PropTypes.string
}

FeaturePin.defaultProps = {
  position: [],
  textureURL: ''
}



export default FeaturePin
