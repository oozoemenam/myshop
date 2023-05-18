
import axios from 'axios';
import * as t from './types';
import { IP } from '../utils';
export const API = `${IP}/api/v1`;


export const clearToken = () => async (dispatch) => {
  try {
    await localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: t.AUTH_ERROR });
  }
  catch (err) {
    console.log(err);
  }
}

export const setToken = async (token) => {
  await localStorage.setItem('token', token);
  axios.defaults.headers.common['Authorization'] = token;
}

export const register = ({ username, email, password }) => async dispatch => {
  try {
    const res = await axios.post(`${API}/auth/signup`, { username, email, password });
    setToken(res.data.token);
    dispatch({ type: t.REGISTER_SUCCESS, user: res.data.user, token: res.data.token });
  } catch (err) {
    console.log(err);
    // dispatch({ type: t.REGISTER_FAIL, error: err?.response?.data?.error || err?.message });
  }
}

export const login = ({ username, password }) => async dispatch => {  
  try {
    const res = await axios.post(`${API}/auth/login`, { username, password });    
    setToken(res.data.token);
    dispatch({ type: t.LOGIN_SUCCESS, user: res.data.user, token: res.data.token });
  } catch (err) {    
    console.log(err);
    // dispatch({ type: t.LOGIN_FAIL, error: err?.response?.data?.error || err?.message });
  }
}

// export const googleLogin = ({ tokenId, googleId, accessToken }) => async dispatch => {  
//   console.log('googleLogin');
//   try {
//     // const info = await axios.get(`https://people.googleapis.com/v1/people/${googleId}?personFields=birthdays,genders&access_token=${accessToken}`)
    
//     const res = await axios.post(`${IP}/api/v1/account/google`, { token: tokenId });    
//     setToken(res.data.token);
//     // await AsyncStorage.setItem('token', res.data.token);
//     // axios.defaults.headers.common['Authorization'] = res.data.token;
    

//     dispatch({ type: t.GOOGLE_LOGIN_SUCCESS, user: res.data.user, token: res.data.token });
//   } catch (err) {  
    
      
//     // dispatch({ type: t.GOOGLE_LOGIN_FAIL, error: err?.response?.data?.error || err?.message });
//   }
// }
// export const facebookLogin = ({ tokenId, googleId, accessToken }) => async dispatch => {  
//   console.log('facebookLogin');
//   try {
//     // const info = await axios.get(`https://people.googleapis.com/v1/people/${googleId}?personFields=birthdays,genders&access_token=${accessToken}`)
    
//     const res = await axios.post(`${IP}/api/v1/account/google2`, { access_token: accessToken });    
//     // const res = await axios.post(`${IP}/api/v1/account/google2`, { access_token: accessToken });    
//     // const res = await axios.post(`${IP}/api/v1/account/facebook`, { access_token: accessToken });    
//     setToken(res.data.token);
//     // await localStorage.setItem('token', res.data.token);
//     // await AsyncStorage.setItem('token', res.data.token);
//     // axios.defaults.headers.common['Authorization'] = res.data.token;
    
//     // dispatch({ type: t.GOOGLE_LOGIN_SUCCESS, user: res.data.user, token: res.data.token });
//     dispatch({ type: t.LOGIN_SUCCESS, user: res.data.user, token: res.data.token });
//   } catch (err) {  
      
//     // dispatch({ type: t.LOGIN_FAIL, error: err?.response?.data?.error || err?.message });
//   }
// }

// export const getUsers = (token) => async (dispatch) => {
  
//   dispatch({ type: t.USERS_LOADING });
  
  
//   try {
//     axios.defaults.headers.common['Authorization'] = token;
//     const res = await axios.get(`${IP}/api/v1/account/users`);    
//     dispatch({ type: t.USERS_LOADED, user: res.data });
//     // dispatch({ type: t.BOARDS_LOADED, boards: res.data.boards });
//   }
//   catch (err) {
//     console.log('getusererr', err);
//     // dispatch({ type: t.LOADING_FAIL, error: err?.response?.data?.error || err?.message });
//     // clearToken();


//     // if (err.response && err.response.status === 404) {
//     //   
//     //   clearToken();
//     // }
//   }
// }

export const getUser = (username) => async (dispatch) => {
  dispatch({ type: t.USER_LOADING });  
  try {
    // axios.defaults.headers.common['Authorization'] = token;
    const res = await axios.get(`${API}/account/${username}`);    
    dispatch({ type: t.USER_LOADED, user: res.data });
  }
  catch (err) {
    console.log('getusererr', err);
    clearToken();
    // dispatch({ type: t.LOGIN_FAIL, error: err?.response?.data?.error || err?.message });
  }
}


export const logout = () => async (dispatch) => {  
  try {
    await localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: t.LOGOUT_SUCCESS });
  }
  catch (err) {
    console.log(err);
  }
}
