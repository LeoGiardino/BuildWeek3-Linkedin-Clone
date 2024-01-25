import { applyMiddleware, combineReducers, createStore } from 'redux';
import {thunk} from 'redux-thunk';



import allProfile from '../reducers/allProfile';
import esperienzeReducer from '../reducers/esperienzeReducer';

const initialState = {
  profili: {},
  esperienze: {},
};

const bigReducer = combineReducers({
  profili: allProfile,
  esperienze : esperienzeReducer
});

console.log(initialState);

export const store = createStore(
  bigReducer,
  initialState,
  applyMiddleware(thunk) // Modifica qui
);
