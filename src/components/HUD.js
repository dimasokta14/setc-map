import React, {Fragment, useState, useEffect} from 'react';
import styled, {css, createGlobalStyle} from 'styled-components';
// icon
import map from '../assets/images/map.svg';
import pin from '../assets/images/map-pin.svg';
import message from '../assets/images/message-square.svg';
import share from '../assets/images/share-2.svg';
import soundOn from '../assets/images/volume.svg';
import soundX from '../assets/images/volume-x.svg';
import arrowLeft from '../assets/images/arrow-left.svg';
import soundSample from '../assets/sample.mp3';

// POI
import POIList from './POIList'


// Modal
import Modal from './Modal';
// 360 Cam


const ButtonIcon = ({icon, onClick, hover, color}) => {
  return(
    <ButtonIconContainer onClick={onClick} onMouseOver={hover}>
      <Icon src={icon} color={color} width={27}/>
    </ButtonIconContainer>
  )
}



const HUD = ({opacity, back, onShow, list}) => {
  const [playing, setPlaying] = useState(false);
  const [isHover, setIsHover] = useState(false)
  const [audio] = useState(new Audio(soundSample))
  const [POI, setPOI] = useState(null)

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);


  // const muteSound = (e) => {
  //   setMute(!mute)
  //   // toggle
  // }

  const initialData = [
    {
      name: 'coba',
      position: [0,0,0],
      type: ''
    },
    {
      name: 'coba1',
      position: [0,0,0],
      type: ''
    }
  ]

  return (
    <>
      <Container>
        <ContainerTop>
          <TopLeftContainer btnOpacity={opacity}>
            <ButtonIcon icon={arrowLeft} onClick={back}/>
          </TopLeftContainer>
          <TopRightContainer>
            <ButtonIcon 
              icon={playing ? soundOn : soundX} 
              onClick={() => setPlaying(!playing)}
              hover={() => console.log('ok')}
            />
          </TopRightContainer>
        </ContainerTop>
        <Modal display='flex' opacity={opacity} onShow={onShow}/>
        <ContainerBottom>
          <BottomLeftContainer>
            <POIList 
              display={POI}
              onClose={() => setPOI(null)}
              list={list}
            />
            <ButtonIcon 
              icon={map} 
              onClick={() => console.log('ok')} 
              color={isHover ? 'green': 'black'}
              hover={() => setIsHover(true)}
            />
            <ButtonIcon 
              icon={pin}
              onClick={() => setPOI('flex')} 
            />
            <ButtonIcon icon={message}/>
            <ButtonIcon icon={share}/>
          </BottomLeftContainer>
        </ContainerBottom>
      </Container>
    </>
  )
}


const ButtonIconContainer = styled.button`
background: none;
border: none;
pointer-events: auto;
cursor: pointer;
`

const Icon = styled.img`
  margin: 10px;
`;

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100%;
  pointer-events: none;
  z-index: 1200!important;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 1.5rem;
  display: flex;
`
const ContainerBottom = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const ContainerTop = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
position: relative;
`


const BottomLeftContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
pointer-events: auto;
padding-left: 0.5rem;
padding-right: 0.5rem;
height: 3rem;
--bg-opacity: 1;
background-color: rgba(255,255,255,var(--bg-opacity));
box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
position: relative;
z-index: 300000 !important;
border-radius: 0.25rem;
`

const TopRightContainer = styled.div`
background-color: white;
width: 50px;
height: 50px;
border-radius: 50%;
display: flex;
justify-content: center;
`
const TopLeftContainer = styled.div`
  opacity: ${props => props.btnOpacity || 0};
  pointer-events: auto;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
  height: 3rem;
  cursor: pointer;
  position: relative;
  border-radius: 0.25rem;
  background-color: white;
    display: flex;
    width: 3rem;
    justify-content: center;
  z-index: 999 !important;
`


export default HUD
