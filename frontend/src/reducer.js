import { combineReducers } from 'redux';
import { ADD_ITEM } from './types';
import { LOGOUT_SUCCESS } from './account/types';
import account from './account/reducer';
import shop from './shop/reducer';

const initialState = {
    numOfItems: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                numOfItems: state.numOfItems + 1
            };
    
        default:
            return state;
    }
}

const appReducer = combineReducers({
    root: reducer,
    account,
    shop
});

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_SUCCESS) {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;