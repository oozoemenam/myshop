

import * as t from './types';

export const initialState = {
    user: null,
    token: localStorage.getItem('token'),
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case t.RESTORE_TOKEN:
            return {
                ...state,
                loggedIn: true, //really ?
                token: action.token
            }
        case t.USER_LOADING:
            return {
                ...state,
                userLoading: true
            }
        // case t.PROFILES_LOADED:
        //     return {
        //         ...state,
        //         profiles: action.profiles
        //     }
        // case t.USERS_LOADED:
        //     return {
        //         ...state,
        //         users: action.users
        //     }
        case t.USER_LOADED:
        case t.LOGIN_SUCCESS:
        case t.GOOGLE_LOGIN_SUCCESS:
        case t.REGISTER_SUCCESS:
            console.log('success!', action);
            return {
                ...state,
                userLoading: false,
                user: action.user,
                isAuthenticated: true,
                token: action.token
            }
        // case t.CLEAR_ERROR:
        //     return {
        //         ...state,
        //         error: null
        //     }
        case t.LOGOUT_SUCCESS:
        case t.LOGIN_FAIL:
        case t.GOOGLE_LOGIN_FAIL:
        case t.REGISTER_FAIL:
        case t.AUTH_ERROR:
            localStorage.clear();
            return {
                ...state,
                user: null,
                error: action.error
            };    
        default:
            return state;
    }
}

export default reducer;