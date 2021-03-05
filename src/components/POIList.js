import React from 'react';
import styled from 'styled-components';

const Icon = ({name}) => {
  return(
    <IconContainer>
      <i class={`far fa-${name}`} style={{fontSize: '24px'}}/>
    </IconContainer>
  )
}

const POIList = ({display, onClose, list}) => {
  console.log(list)
  return (
    <Card display={display}>
      <CardHeader>
        <TextHeader>Pilih Fasilitas</TextHeader>
        <CloseButton onClick={onClose}>
          <icon class='fas fa-times'/>
        </CloseButton>
      </CardHeader>
      <CardBody>
        {list && list.map((item, index) => (
          <POI 
            onClick={()=> console.log(item.name)}
            key={index}
          >
            <Icon name={item.type}/>
            <ContentText>{item.name}</ContentText>
          </POI>
        ))}
      </CardBody>
    </Card>
  )
}

const Card = styled.div`
bottom: 85px;
left: 23px;
width: 350px;
max-height: 85vh;
z-index: 99999 !important;
position: fixed;
overflow: hidden;
border-radius: .25rem;
--bg-opacity: 1;
background-color: rgba(255,255,255,var(--bg-opacity));
display: ${props => props.display || 'none'};
flex-direction: column;
`

const CardHeader = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #407352;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const TextHeader = styled.h3`
  line-height: 28px;
  font-weight: 600;
  margin: 0px;
`

const CardBody = styled.div`
overflow-y: scroll;
max-height: 70vh;
overflow-x: hidden !important;
width: 100%;
padding: 10px;
--bg-opacity: 1;
    background-color: rgba(255,255,255,var(--bg-opacity));
`
const POI = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding-bottom: 15px;
  cursor: pointer;
  pointer-events: auto;
  // border-bottom: solid 1px #eaeaea;
`
const CloseButton = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  pointer-events: auto;
`

const IconContainer = styled.div`
  width: 30px;
  height: 30px;
    border: 2px solid #407352;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: #407352;
`

const ContentText = styled.h3`
  font-size: 1rem;
  padding-left: 10px;
  width: 80%;
  font-weight: 400;
  margin: 0px;
`

export default POIList
