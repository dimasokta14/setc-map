const defaultState = {
  data: {},
  opacity: 0
}

const pinReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "OPEN_PIN":
      return {
        data: {...action.payload},
        opacity: 1
      }

    default: return state
  }
}

export default pinReducer