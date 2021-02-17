import React from 'react';
import styled from 'styled-components';

const List = ({icon, data}) => {
  return(
    <Chip>
      <i class={icon} style={{marginRight: '10px'}}></i>
      <p>{data}</p>
    </Chip>
  )
}

const Modal = ({display, opacity, onShow}) => {
  return (
    <Container display={display} opacity={opacity}>
      <PointOfInterest>
        <ButtonArrowLeft/>
        <Card>
          <CardMain>
            <CardLeft>
              <CardDetails>
                <h3>Ruang Pelatihan 1</h3>
                <CardCategory>
                  <List icon="fas fa-user-friends" data='200 orang'/>
                  {/* <List icon="fas fa-building" data='2012'/> */}
                </CardCategory>
                <p style={{lineHeight: '22px', fontWeight: 100}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis dui a urna iaculis varius. Sed vitae semper eros, vitae volutpat urna. Ut sit amet dictum lectus. Cras vestibulum et tellus id consectetur.</p>
                <ButtonEnter onClick={onShow}>MASUK</ButtonEnter>
              </CardDetails>
            </CardLeft>
            <CardRight>
            <img style={{width: '100%', height: '100%'}} src='https://images.unsplash.com/photo-1554435493-93422e8220c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'/>
            </CardRight>
          </CardMain>
        </Card>
        <ButtonArrowRight/>
      </PointOfInterest>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: ${props => props.display || 'hidden'};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  opacity: ${props => props.opacity || 0}
`

const PointOfInterest = styled.div`
  font-family: Futura,Helvetica,sans-serif;
  text-align: center;
  color: black;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: opacity 1s ease-in-out,transform 1s ease-in-out;
  padding-left: 50px;
  padding-right: 50px;
`

const Card = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
`
const CardMain = styled.div`
  color: black;
  width: 760px;
  height: 300px;
  display: flex;
`
const CardLeft = styled.div`
  width: 70%;
  text-align: left;
  background-color: rgba(255,255,255,0.4);
`
const CardRight = styled.div`
  width: 30%
`
const CardDetails = styled.div`
  width: 90%;
  padding: 20px;
`
const CardCategory = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Chip = styled.div`
  display: flex;
  padding: 0 15px;
  height: 50px;
  font-size: 12px;
  line-height: 50px;
border-radius: 25px;
  background-color: #f1f1f1;
  align-items: center;
`
const ButtonEnter = styled.div`
  color: #fff;
  border: none;
  padding: 5px 10px 5px 10px;
  outline: none;
  font-size: 12px;
  margin-top: 30px;
  margin-left: 10px;
  background: #01401C;
  border-radius: 10px;
  -webkit-box-shadow: 0 0 20px rgba(0,0,0,0.2);
          box-shadow: 0 0 20px rgba(0,0,0,0.2);
  -webkit-transition: 300ms ease-in-out;
  -o-transition: 200ms ease-in-out;
  transition: 200ms ease-in-out;
  width: 75px;
  height: 50px;
  cursor: pointer;
  pointer-events: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonArrowLeft = styled.div`
  width: 75px;
  height: 50px;
  background-color: rgba(64, 115, 82,.6);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
  transition: transform 1s ease-out;
  transition-delay: 1s;
  transform: translateX(0);
  padding-top: 10px;
  padding-bottom: 10px;
`

const ButtonArrowRight = styled.div`
  width: 75px;
  height: 50px;
  background-color: rgba(64, 115, 82,.6);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
  transition: transform 1s ease-out;
  transition-delay: 1s;
  transform: translateX(0);
  padding-top: 10px;
  padding-bottom: 10px;
`
const CardFooter = styled.div`
  width: 100%;
  background-color: white;
`

export default Modal
