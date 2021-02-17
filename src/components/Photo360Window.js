import React from 'react';
import styled from 'styled-components';
import {Pannellum} from 'pannellum-react';
import sample from '../assets/images/sample.jpg';
import arrowLeft from '../assets/images/arrow-left.svg';

const Photo360Window = ({display, load, onBack}) => {
  return (
    <Window display={display}>
      <BackButton onClick={onBack}>
        <img src={arrowLeft}/>
      </BackButton>
      <Pannellum
        width="100%"
        height="100%"
        image='https://i2.wp.com/www.samrohn.com/wp-content/uploads/le-meridien-bedroom-panorama.jpg?resize=1200%2C600'
        pitch={10}
        yaw={180}
        hfov={110}
        // autoLoad={load}
        autoload
        onLoad={() => {
            console.log("panorama loaded");
        }}
    >
      <Pannellum.Hotspot
        type="info"
        pitch={11}
        yaw={-167}
        text="Info Hotspot Text 3"
        URL="https://github.com/farminf/pannellum-react"
      />
 
      <Pannellum.Hotspot
        type="info"
        pitch={31}
        yaw={-107}
        text="Info Hotspot Text 4"
        URL="https://github.com/farminf/pannellum-react"
      />
    </Pannellum>
    </Window>
  )
}

const Window = styled.div`
position: fixed;
height: 100%;
width: 100vw;
z-index: 9999 !important;
background-color: white;
display: ${props => props.display};
`
const BackButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: .75rem;
  z-index: 999 !important;
  position: fixed;
    top: 20px;
    right: 20px;
    cursor: pointer;
`

export default Photo360Window
