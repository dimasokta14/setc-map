import React, { useRef } from "react";
import { extend, useThree, useFrame } from "react-three-fiber";
import { MapControls } from "three/examples/jsm/controls/OrbitControls";
import {PerspectiveCamera, useGLTF} from '@react-three/drei'

extend({ MapControls });

const CameraControls = (props) => {
  const orbitRef = useRef();
  const {camera, gl} = useThree()
  // const {
  //   camera,
  //   gl: { domElement },
  // } = useThree();

  // const controls = useRef();

  // camera.position.z = 999;

  useFrame(() => {
    if(orbitRef.current){
      orbitRef.current.update()
    }
  });

  // return (
  //   <OrbitControls
  //     ref={controls}
  //     args={[camera, domElement]}
  //     autoRotate={false}
  //     enableZoom={false}
  //   />
  // );

};

export default CameraControls;
