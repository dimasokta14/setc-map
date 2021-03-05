const setPin = payload => ({type: 'SET_PIN', payload})

const clickPOI = (id, opacity) => dispatch => {
  try {
    console.log(id, opacity)
    dispatch(setPin(id))
  } catch (error) {
    console.log(error)
  }
}

export const pinActions = {
  clickPOI,
  setPin
}