import * as THREE from 'three'

import React, { useRef } from "react";
import {ColladaLoader} from 'three/examples/jsm/loaders/ColladaLoader';
import { useFrame, useLoader, useThree } from "react-three-fiber";
import mars from '../assets/plate.glb'
import map from '../assets/models/setc_map.dae';
import {useHelper} from '@react-three/drei'
import { AxesHelper, BoxHelper } from 'three';



const Sphere = ({position, rotation}) => {
  const planet = useRef();
  let x;
  let y;
  const {mouse, viewport, intersect} = useThree()

  const { scene } = useLoader(ColladaLoader, map);
  // useHelper(planet, BoxHelper, 'teal')

  // useFrame(() => (planet.current.rotation.y += 0.0002));

  return (
    <primitive 
      dispose={null}
      object={scene} 
      castShadow
      ref={planet}
      position={position}
      // children-0-material={new THREE.MeshBasicMaterial({wireframe: true, color: 0xffffff})}
      // children-1-material={new THREE.MeshBasicMaterial({wireframe: true, color: 0x0000ff})}
      // children-2-material={new THREE.MeshBasicMaterial({wireframe: true, color: 0x0000ff})}
      // children-3-material={new THREE.MeshBasicMaterial({wireframe: true, color: 0x00ff00})}
      // children-4-material={new THREE.MeshBasicMaterial({wireframe: true, color: 0x0000ff})}
    />
  );
};

export default Sphere;
