import {userConstants} from '../constants';
import {user} from '../services'
import {alertActions} from './'
import {history} from '../helpers'
import { error } from 'three';

export const userActions = {
  login,
  logout,
  getAll
}

function login(email, password){
  return dispatch => {
    dispatch(request({email}))

    user.login(email, password)
      .then(
        user => {
          dispatch(success(user))
          history.push('/')
        },
        error => {
          dispatch(failure(error))
          dispatch(alertActions.error(error))
        }
      )
  }

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
  user.logout();
  return { type: userConstants.LOGOUT };
}

function getAll() {
  return dispatch => {
      dispatch(request());

      user.getAll()
          .then(
              users => dispatch(success(users)),
              error => { 
                  dispatch(failure(error));
                  dispatch(alertActions.error(error))
              }
          );
  };

  function request() { return { type: userConstants.GETALL_REQUEST } }
  function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
  function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}
