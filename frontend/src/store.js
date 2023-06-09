import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducer';

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;