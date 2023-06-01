import axios from 'axios';
import { IP } from '../utils';
import * as t from './types';
export const API = `${IP}/api/v1`;

export const clearToken = () => async (dispatch) => {
	try {
		await localStorage.removeItem('token');
		delete axios.defaults.headers.common['Authorization'];
		dispatch({ type: t.AUTH_ERROR });
	} catch (err) {
		console.log(err);
	}
};

export const setToken = async (token) => {
	await localStorage.setItem('token', token);
	axios.defaults.headers.common['Authorization'] = token;
};

export const register =
	({ username, email, password }) =>
	async (dispatch) => {
		dispatch({ type: t.USER_LOADING });
		try {
			const res = await axios.post(`${API}/auth/signup`, {
				username,
				email,
				password,
			});
			// setToken(res.data.token);
			dispatch({
				type: t.REGISTER_SUCCESS,
				// user: res.data.user,
				// token: res.data.token,
			});
		} catch (err) {
			console.log(err);
			dispatch({
				type: t.REGISTER_FAIL,
				error: err.message,
			});
		}
	};

export const login =
	({ username, password }) =>
	async (dispatch) => {
		try {
			const res = await axios.post(`${API}/auth/login`, { username, password });
			setToken(res.data.token);
			dispatch({
				type: t.LOGIN_SUCCESS,
				user: res.data.user,
				token: res.data.token,
			});
		} catch (err) {
			console.log(err);
			dispatch({
				type: t.LOGIN_FAIL,
				error: err.message,
			});
		}
	};

export const getUser = (username) => async (dispatch) => {
	dispatch({ type: t.USER_LOADING });
	try {
		// axios.defaults.headers.common['Authorization'] = token;
		const res = await axios.get(`${API}/account/${username}`);
		dispatch({ type: t.USER_LOADED, user: res.data });
	} catch (err) {
		console.log('getusererr', err);
		clearToken();
		dispatch({
			type: t.LOADING_FAIL,
			error: err.message,
		});
	}
};

export const logout = () => async (dispatch) => {
	try {
		await localStorage.removeItem('token');
		delete axios.defaults.headers.common['Authorization'];
		dispatch({ type: t.LOGOUT_SUCCESS });
	} catch (err) {
		console.log(err);
	}
};
