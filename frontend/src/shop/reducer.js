

import * as t from './types';

export const initialState = {
    products: null,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case t.PRODUCTS_LOADED:
            console.log('get2', action);
            return {
                ...state,
                products: action.products
            }
        default:
            return state;
    }
}

export default reducer;