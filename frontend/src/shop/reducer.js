

import * as t from './types';

export const initialState = {
    user: null,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case t.PRODUCTS_LOADED:
            return {
                ...state,
                products: action.products
            }
        default:
            return state;
    }
}

export default reducer;