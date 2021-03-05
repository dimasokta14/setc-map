import {combineReducers} from 'redux'
import users from './userReducers';
import authentication from './authReducers';
import alerts from './alertReducers';
import pins from './pinReducers'

const rootReducer = combineReducers({
  users,
  authentication,
  alerts,
  pins
})

export default rootReducer