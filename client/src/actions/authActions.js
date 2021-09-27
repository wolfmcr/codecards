import axios from 'axios';
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types';
import { returnErrors } from './errorActions';

//Check token and load user
export const loadUser = () => (dispatch, getState) => {
  //User loading
  dispatch({ type: USER_LOADING });

  axios
    .get('/auth/user', tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};

//Register new user
export const register =
  ({ name, email, password }) =>
  (dispatch) => {
    //Headers
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };

    //Request Body
    const body = JSON.stringify({ name, email, password });

    axios
      .post('/auth/register', body, config)
      .then((res) => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
      .catch((err) => {
        dispatch(
          returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
        );
        dispatch({ type: REGISTER_FAIL });
      });
  };

//Login user
export const login =
  ({ email, password }) =>
  (dispatch) => {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };

    const body = JSON.stringify({ email, password });

    axios
      .post('/auth/login', body, config)
      .then((res) => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response, 'LOGIN_FAIL'));
        dispatch({ type: LOGIN_FAIL });
      });
  };

//Logout user
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
};

//Setup config/headers and token
export const tokenConfig = (getState) => {
  //Get token from localstorage
  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  //If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};
