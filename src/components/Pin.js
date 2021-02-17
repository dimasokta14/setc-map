import React, {useRef, useState, useMemo, useEffect} from 'react';
import {useFrame, useLoader} from 'react-three-fiber';
import * as THREE from 'three';
import sound from '../assets/images/volume.svg';
import BuildingMtrl from '../assets/images/icon_building.jpg' 
import {Html} from '@react-three/drei';
import styled from 'styled-components';
import {TextureLoader} from 'three'

const Pin = ({data, onClick}) => {

  const x = 0;
  const y = 0;
  const hexagon = new THREE.Shape()
  hexagon.moveTo(0, 4);
  hexagon.lineTo(x + 3.5,y + 2.5);
  hexagon.lineTo(x + 3.5, y - 2.5);
  hexagon.lineTo(0, y - 4);
  hexagon.lineTo(x - 3.5, y - 2.5);
  hexagon.lineTo(x - 3.5, y + 2.5);

  const extrudeSettings = {
    depth: 0.5,
    steps: 2,
    bevelEnabled: false,
    bevelThickness: 0.5,
    bevelSize: 1.5,
    bevelSegments: 1
  };

  const hexagon2 = new THREE.Shape()
  hexagon2.moveTo(0, 3);
  hexagon2.lineTo(x + 2.5,y + 2);
  hexagon2.lineTo(x + 2.5, y - 2);
  hexagon2.lineTo(0, y - 3);
  hexagon2.lineTo(x - 2.5, y - 2);
  hexagon2.lineTo(x - 2.5, y + 2);


  const extrudeSettings2 = {
    steps: 1,
    depth: -0.75,
    bevelEnabled: false,
    bevelThickness: 1,
    bevelSize: 1,
    bevelOffset: 0,
    bevelSegments: 1
  };

  const icon_texture1 = useLoader(TextureLoader, BuildingMtrl)

  const mesh = useRef();
  const mesh2 = useRef();
  const tag = useRef();
  const previous = useRef();
  const [hover, set] = useState()
  const [active, setActive] = useState(false)

  useEffect(() => void (previous.current = hover), [hover])

  const dummy = new THREE.Object3D()
  const dummyColor = new THREE.Color()
  const hexagonPin = useMemo(
    () => 
      data.map((element) => ({
        position: [element.x, element.y, element.z],
        id: element.id,
        name: element.name
      }))
  )

  console.log(previous.current)

    
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    hexagonPin.forEach((element,i) => {
      const id = i++
      dummy.position.set(element.position[0], element.position[1], element.position[2])
      // dummy.rotation.y += id === hover ? 0.1 : 0.01
      const scale = id === hover ? 1.5 : 1
      const speed = id === hover ? 0.1 : 0.01
      dummy.scale.set(scale, scale, scale)
      dummy.rotation.y += speed
      // if(hover !== previous.current){
      //   dummyColor.set(id === hover ? '#407352': 'orange')
      //   mesh.current.geometry.attributes.color.needsUpdate = true
      // }
      dummy.updateMatrix()
      mesh.current.setMatrixAt(id, dummy.matrix)
    });
    mesh.current.instanceMatrix.needsUpdate = true
  })

  console.log(hover)


  return (
      <instancedMesh
        args={[null, null, data.length + 1]}
        ref={mesh}
        onPointerMove={(e) => set(e.instanceId)}
        onPointerOut={(e) => set(undefined)}
      >
        <extrudeBufferGeometry attach='geometry' args={[hexagon, extrudeSettings]}/>
          {/* <instancedBufferAttribute attachObject={['attributes', 'color']} args={[hover ? 'orange': 'green', 3, true]}/>
        </extrudeBufferGeometry> */}
        {/* <meshBasicMaterial attach='material' color={hover ? 'orange': '#407352'}/> */}
        <meshStandardMaterial roughness={0.75} emissive="#404057" color='#407352'/>
        {/* <meshStandardMaterial map={icon_texture1} attachArray='material'/>
        <meshStandardMaterial map={icon_texture1} attachArray='material'/> */}
        {data && data.map((item) => (
          <Html scaleFactor={40} position={[item.x, item.y, item.z]}>
            <Content>{item.name}</Content>
          </Html>
        ))}
      </instancedMesh>
  )
}

const Content = styled.div`
padding-top: 10px;
transform: translate3d(50%, 0, 0);
text-align: left;
background: white;
color: black;
padding: 10px 15px;
border-radius: 5px;
`

export default Pin
