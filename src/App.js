import React, { Suspense, useMemo, useState, useEffect, useRef, Fragment, useCallback } from "react";
import * as THREE from 'three'
import { Canvas, useThree, useFrame} from "react-three-fiber";
import "./styles.css";
import Planet from './Plate'
import Camera from './components/Camera';
import Loading from './components/Loading'

import { CameraControls, Sphere, SkyBox } from "./components";
import {OrbitControls, softShadows, MapControls} from 'drei'
import { PerspectiveCamera } from "@react-three/drei";
import HUD from './components/HUD';
import Pin from './components/Pin';
import WelcomeScreen from './components/WelcomeScreen'
import * as FirestoreService from './firebase';
import firebase from './firebase';
import styled from 'styled-components';
import Photo360Window from './components/Photo360Window';
import DataCollection from './components/DataCollection';

// Tes
import Effects from './components/tes/Effects';
import Boxes from './components/tes/Box'

const App = () => {

  const db = firebase.firestore()

  const [features, setFeatures] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const [enter, setEnter] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [welcome, setWelcome] = useState(true)

  // const onDataChange = (items) => {
  //   let features = [];

  //   items.docs.forEach(item => {
  //     let id = item.id;
  //     let data = item.data();

  //     features.push({
  //       id: id,
  //       name: data.name,
  //       type: data.type,
  //       x: data.position[0],
  //       y: data.position[1],
  //       z: data.position[2]
  //     })
  //   });
  //   setIsLoading(false)
  //   setFeatures(features)
  // }

  useEffect(() => {
    const fetchFeatures = async () => {
      const db = firebase.database().ref('features_map')
      const result = await db.once('value', snapshot => {
          let features = [];
    
          snapshot.forEach(item => {
            let id = item.key;
            let data = item.val();
      
            features.push({
              id: id,
              name: data.name,
              type: data.type,
              x: data.x,
              y: data.y,
              z: data.z
            })
          });
          setIsLoading(false)
          setFeatures(features)
      })

      return result
    }

    fetchFeatures()

  },[])

  const mouseControllers = {
    LEFT: THREE.MOUSE.PAN,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.ROTATE
  }

  const CameraSetting = {
    fov: 45,
    position: [-5,90,100],
    near: 0.1,
    far: 1500
  }
    return (
      <Fragment>
        <Loading display={isLoading ? 'flex': 'none'}/>
        <WelcomeScreen display={welcome ? 'block': 'none'} onClick={() => setWelcome(false)}/>
        <Container>
          <Photo360Window 
            display={enter ? 'flex' : 'none'} 
            load={enter}
            onBack={() => setEnter(false)}
          />
          <HUD 
            opacity={opacity}
            back={()=> setOpacity(0)}
            onShow={() => setEnter(true)}
            list={features}
          />
          <Canvas 
            className="canvas" 
            style={{height: '100vh', backgroundColor: '#C3EAF1', position: "fixed"}}
            receiveShadow
          >
            <ambientLight intensity={0.3} />
            <directionalLight
              castShadow
              position={[0, 20, 0]}
              intensity={0.5}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={50}
              shadow-camera-top={10}
            />
            <Camera/>
            <pointLight position={[150, 150, 50]} intensity={0.55} />
            <Suspense fallback='loading'>
              <group>
                {features && <Pin data={features} onClick={() => setOpacity(1)}/>}
                {/* <Effects /> */}
                <Sphere
                  position={[0, -20, 0]}
                />
              </group>
            </Suspense>
            <OrbitControls
              mouseButtons={mouseControllers}
              panSpeed={2}
              screenSpacePanning={false}
              maxPolarAngle={Math.PI/2}
              maxAzimuthAngle={Math.PI/1}
              maxDistance={100}
              // zoomSpeed={20}
            />
          </Canvas>
        </Container>
      </Fragment>
    ); 
};

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100vw;
`

export default App;
