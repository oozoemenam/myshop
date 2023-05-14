import { combineReducers } from 'redux';
import { ADD_ITEM } from './types';

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

export default reducer;