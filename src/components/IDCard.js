import React,{useState} from 'react'
import styled from 'styled-components'

// image
import IdFront from '../assets/images/id-front.jpg'

const IDCard = (props) => {
  const {display} = props
  const [flipped, setFlipped] = useState()

  const handleFlip = () => {
    setFlipped({flipped: !flipped})
  }

  return (
    <Container 
      display={display}
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
      flipped={flipped}
    >
    </Container>
  )
}

const Front = () => {
  return(
    <div className='front'>

    </div>
  )
}

// const Container = styled.div`
//   top: 150px;
//   left: -15px;
//   width: 260px;
//   z-index: 99999 !important;
//   position: fixed;
//   overflow: hidden;
//   border-radius: 20%;
//   --bg-opacity: 1;
//   background-color: rgba(255,255,255,var(--bg-opacity));
//   display: ${props => props.display || 'none'};
//   flex-direction: column;
//   background: url(${IdFront}) no-repeat center;
//   background-size: 70%;
//   height: 100%
// `

const Container = styled.div`
  top: 150px;
  left: -15px;
  width: 260px;
  z-index: 99999 !important;
  position: fixed;
  overflow: hidden;
  border-radius: 20%;
  --bg-opacity: 1;
  background-color: rgba(255,255,255,var(--bg-opacity));
  display: flex;
  transform-style: preserve-3d;
  box-sizing: border-box;
  &.${props => props.flipped}{
    .front {
      transform: rotateY(180deg)
    }
    .back{
      transform: rotateY(0deg)
    }
  }
`

const CardFront = styled.div`
  
`

export default IDCard
