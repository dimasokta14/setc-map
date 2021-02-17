import React, {useState, useEffect, useMemo} from 'react';
import Pin from './Pin';


const PinLayer = ({data}) => {
  const {positions} = useMemo(() => {
    const positions = data.map((item) => {
      let x;
      let y;
      let z;
      x = item.x;
      y = item.y;
      z = item.z;
      return
    })
  },[])
  return (
    <div>
      
    </div>
  )
}

export default PinLayer
