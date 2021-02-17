import React from 'react';
import styled, {keyframes} from 'styled-components';

const Loading = ({display}) => {
  return (
    <Container display={display}>
      <Content>
        <Boxes>
          <div className='box'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Boxes>
      </Content>
    </Container>
  )
}

const box1 = keyframes`
  0%,
  50% {
      transform: translate(100%, 0);
  }
  100% {
      transform: translate(200%, 0);
  }
`
const box2 = keyframes`
  0%{
    transform: translate(0, 100%);
  }
  50% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(100%, 0);
  }
`
const box3 = keyframes`
  0%,
  50% {
      transform: translate(100%, 100%);
  }
  100% {
      transform: translate(0, 100%);
  }
`
const box4 = keyframes`
  0%{
    transform: translate(200%, 0);
  }
  50% {
    transform: translate(200%, 100%);
  }
  100% {
    transform: translate(100%, 100%);
  }
`

const Boxes = styled.div`
  height: 32px;
  width: 32px;
  position: relative;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  margin-top: 32px;
  -webkit-transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);
  transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);
  .box {
    width: 32px;
    height: 32px;
    top: 0px;
    left: 0;
    position: absolute;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
  .box:nth-child(1){
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
    -webkit-animation: ${box1} 1s linear infinite;
    animation: ${box1} 1s linear infinite;
  }
  .box:nth-child(2) {
    -webkit-transform: translate(0, 100%);
    transform: translate(0, 100%);
    -webkit-animation: ${box2} 1s linear infinite;
    animation: ${box2} 1s linear infinite;
  }
  .box:nth-child(3) {
    -webkit-transform: translate(100%, 100%);
    transform: translate(100%, 100%);
    -webkit-animation: ${box3} 1s linear infinite;
    animation: ${box3} 1s linear infinite;
  }
  .box:nth-child(4) {
    -webkit-transform: translate(200%, 0);
    transform: translate(200%, 0);
    -webkit-animation: ${box4} 1s linear infinite;
    animation: ${box4} 1s linear infinite;
  }
  .box > div {
    background: #EA8580;
    --translateZ: 15.5px;
    --rotateY: 0deg;
    --rotateX: 0deg;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #EA8580;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    -webkit-transform: rotateY(var(--rotateY)) rotateX(var(--rotateX)) translateZ(var(--translateZ));
    transform: rotateY(var(--rotateY)) rotateX(var(--rotateX)) translateZ(var(--translateZ));
  }
  .box > div:nth-child(1) {
    top: 0;
    left: 0;
    background: #EA8580;
  }
  .box > div:nth-child(2) {
    background: #145af2;
    right: 0;
    --rotateY: 90deg;
  }
  .box > div:nth-child(3) {
    background: #447cf5;
    --rotateX: -90deg;
  }
  .box > div:nth-child(4) {
    background: #DBE3F4;
    top: 0;
    left: 0;
    --translateZ: -90px;
  }
`

const Container = styled.div`
  width: 100%;
  display: ${props => props.display || 'none'};
  background-color: white;
  position: absolute;
  z-index: 99999;
  height: 100vh;
  color: #ADAFB6;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default Loading
