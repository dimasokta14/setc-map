import {userConstants} from '../constants';
import {user} from '../services'
import {alertActions} from './'
import {history} from '../helpers'
import API from '../api';
import axios from 'axios';

const setUser = payload => ({type: "SET_USER", payload})

const login = (email, password)  => dispatch => {
  const failure = error => {return {type: userConstants.LOGIN_FAILURE, error}}
  return API.user.login(email, password)
  .then((data) => {
    console.log(data.accessToken)
    localStorage.setItem('token', data.accessToken)
    dispatch(setUser(data))
  })
  .catch((err) => {
    dispatch(failure(err))
  })
}

function logOut() {
  return { type: userConstants.LOGOUT };
}

const signUp = userInfo => dispatch => {
  const failure = error => { return { type: userConstants.SIGNUP_FAILURE, error } }
  return API.user.register(userInfo)
    .then((data) => {
      localStorage.setItem('token', data.accessToken)
      dispatch(setUser(data))
    })
    .catch((err) => {
      dispatch(failure(err))
    })

}

const autoLogin = () => dispatch => {
  axios.post(`http://localhost:5000/api/auth/auto_login`, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application",
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(data => {
    localStorage.setItem('token', data.token)
    console.log(data)
    dispatch(setUser(data))
  })
  .catch(err => {
    dispatch(failure(err))
  })

  const failure = error => { return { type: userConstants.LOGIN_FAILURE}}
}

export const userActions = {
  login,
  logOut,
  signUp,
  autoLogin
}