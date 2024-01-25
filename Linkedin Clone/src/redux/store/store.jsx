import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk'; // Modifica qui

import allProfile from '../reducers/allProfile';

const initialState = {
  profili: {},
};

const bigReducer = combineReducers({
  profili: allProfile,
});

console.log(initialState);

export const store = createStore(
  bigReducer,
  initialState,
  applyMiddleware(thunk) // Modifica qui
);
