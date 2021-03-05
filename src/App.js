import React, { Suspense, memo, useState, useEffect, useRef, Fragment, useCallback } from "react";
import * as THREE from 'three'
import { Canvas, useThree, useFrame, extend} from "react-three-fiber";
import "./styles.css";
import Camera from './components/Camera';
import Loading from './components/Loading'

import { CameraControls, Sphere, SkyBox } from "./components";
import HUD from './components/HUD';
import Pin from './components/Pin';
import firebase from './firebase';
import styled from 'styled-components';
import Photo360Window from './components/Photo360Window';
import MapControl from './components/MapController'

// action
import {pinActions} from './actions'

// TES
import FeaturePin from './components/FeaturePin'
import { Object3D } from "three";

// texture
import One from './assets/images/1.png'
import Building from './assets/images/building.png'

import {useDispatch} from 'react-redux'

const App = () => {


  const [features, setFeatures] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const [enter, setEnter] = useState(false);

  // dispatch
  const dispatch = useDispatch()

  const gridHelper = useRef()

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
          dispatch(pinActions.setPin(features))
          setIsLoading(false)
          setFeatures(features)
      })

      return result
    }

    fetchFeatures()

  },[])

  const handleClick = (e) => {
    console.log(e.target.getAtrribute("data-name"))
    setOpacity(1)
  }

  const mouseControllers = {
    LEFT: THREE.MOUSE.PAN,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.ROTATE
  }

  

    return (
      <Fragment>
        <Loading display={isLoading ? 'flex': 'none'}/>
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
            {/* <gridHelper args={[700, 700, `white`, `gray`]}/> */}
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
                {/* {features && <Pin data={features} onClick={() => handleClick()}/>} */}
                {/* <Effects /> */}
                <Sphere
                  position={[0, 0, 0]}
                />
            </Suspense>
            <object3D>
              {
                features && features.map((data, index) => (
                  <FeaturePin 
                    position={[data.x, data.y, data.z]} 
                    textureURL={Building} 
                    key={data.id}
                    onClick={handleClick}
                    // id={data.name}
                  />
                ))
              }
            </object3D>
            {/* <MapControls
              ref={mapController}
              maxPolarAngle={Math.PI/2}
              maxAzimuthAngle={Math.PI/1}
              maxDistance={100}
              panSpeed={10}
              touches={{
                ONE: THREE.TOUCH.DOLLY_PAN, 
                TWO: THREE.TOUCH.ROTATE
              }}
            /> */}
            <MapControl/>
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

export default memo(App);
