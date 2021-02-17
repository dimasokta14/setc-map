import React, {useState} from 'react';
import styled from 'styled-components';
import logo from '../assets/images/setc-city-map.png';
import {Name, EmailPhone, Institusi, NewsLetter} from '../components/FormStep/MultiStep';
import Hi from '../assets/images/hi.png';
import {useForm, useStep} from 'react-hooks-helper';

const steps = [
  {id: 'name'},
  {id: 'email'},
  {id: 'group'},
  {id: 'news'}
]

const WelcomeScreen = ({display, onClick}) => {
  return (
    <Container display={display}>
      <ContainerContent>
        <Box>
          <img width='500px' src={logo}/>
          <ButtonEnter onClick={onClick}>MULAI MENJELAJAH</ButtonEnter>
        </Box>
      </ContainerContent>
      <ContainerFooter>
        <Items>
          <Item>
            @2021 Sampoerna Entrepreneurship Training Center
          </Item>
          {/* <Item><a>Terms</a></Item> */}
        </Items>
      </ContainerFooter>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: ${props => props.display || 'none'};
  background-color: white;
  position: absolute;
  z-index: 99999;
  height: 100vh;
`

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const ContainerFooter = styled.div`
  flex: 20%;
  position: absolute;
  bottom: 0px;
  padding: 20px 20px 0px 20px;
`
const ContainerContent = styled.div`
  flex: 80%;
`
const Items = styled.ul`
  list-style: none;
`
const Item = styled.li`
  font-size: 12px;
`
const ButtonEnter = styled.div`
  color: #fff;
  border: none;
  padding: 5px 10px 5px 10px;
  outline: none;
  font-size: 18px;
  margin-top: -60px;
  background: #0D2840;
  border-radius: 5px;
  -webkit-box-shadow: 0 0 20px rgba(0,0,0,0.1);
          box-shadow: 0 0 20px rgba(0,0,0,0.1);
  -webkit-transition: 300ms ease-in-out;
  -o-transition: 200ms ease-in-out;
  transition: 200ms ease-in-out;
  width: 300px;
  height: 50px;
  cursor: pointer;
  pointer-events: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default WelcomeScreen
