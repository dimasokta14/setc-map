import {combineReducers} from 'redux'
import users from './userReducers';
import authentication from './authReducers';
import alerts from './alertReducers';

export default combineReducers({
  users,
  authentication,
  alerts
})