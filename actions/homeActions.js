import { authConstants } from '../constants'
import { httpService, encryptDecrypt, storageService } from '../services'
import { loading, alertActions } from '.'

import getEnvVars from '../environment';
export const AuthActions = {
  login,
  logout,
  register,
}

function login(username, password) {
  console.log('username', username)
  return (dispatch) => {
    dispatch(loading(true))
    dispatch(request({ username }))
    password = encryptDecrypt.sha512Encrypt(password)
    let params = { userName: username, userPassword: password, appId: getEnvVars().appId }
    console.log('PARAMS', params)
    httpService.apiPost('/login', params).then(
      (user) => {
        if (user.success) {
          
          storageService.setLogin(user.data)
          setTimeout(()=>{
            dispatch(success(user))
            dispatch(loading(false))
          },1000);
        }else{
          dispatch(failure(user.message))
          dispatch(alertActions.error(user.message))  
          dispatch(loading(false))
        }
        
        dispatch(alertActions.clear());  
      },
      (error) => {
        
        console.log('lgin error', error)
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
        dispatch(loading(false))
        console.log('lgin error ', error)
        dispatch(alertActions.clear());
      }
    )
  }

  function request(user) {
    return { type: authConstants.LOGIN_REQUEST, user }
  }
  function success(user) {
    return { type: authConstants.LOGIN_SUCCESS, user }
  }
  function failure(error) {
    return { type: authConstants.LOGIN_FAILURE, error }
  }
}




function logout() {
  // httpService.logout()
  return { type: authConstants.LOGOUT }
}

function register(user) {
  return (dispatch) => {
    dispatch(loading(true))
    dispatch(request(user))
    user.appId = getEnvVars().appId;
    httpService.apiPost('/signup', user).then(
      (user) => {
        dispatch(success())
        
        dispatch(alertActions.success('Registration successful'))
        dispatch(loading(false))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
        dispatch(loading(false))
      }
    )
  }

  function request(user) {
    return { type: authConstants.REGISTER_REQUEST, user }
  }
  function success(user) {
    return { type: authConstants.REGISTER_SUCCESS, user }
  }
  function failure(error) {
    return { type: authConstants.REGISTER_FAILURE, error }
  }
}
