import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  LOADING,
} from '../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    user: null,
    isAuthenticated: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Loading true
  const loadingAuth = () => {
    dispatch({ type: LOADING });
  };

  // Load User

  const loadUser = async () => {
    if (localStorage.token) {
      console.log('loadUser!');
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get('/api/v1/auth/me');

      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Register User

  const register = async (formData) => {
    loadingAuth();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('api/v1/auth/register', formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Login User

  const login = async (formData) => {
    loadingAuth();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('api/v1/auth/login', formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Logout

  const logout = async () => {
    loadingAuth();
    try {
      await axios.get('api/v1/auth/logout');
      dispatch({ type: LOGOUT });
    } catch (err) {}
  };

  // Clear Errors

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        register,
        login,
        logout,
        clearErrors,
        loadUser,
        loadingAuth,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
