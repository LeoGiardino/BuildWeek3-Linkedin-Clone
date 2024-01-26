import { applyMiddleware, combineReducers, createStore } from 'redux';
import {thunk} from 'redux-thunk';

import profiliReducer from '../reducers/profili';
import esperienzeReducer from '../reducers/esperienze';
import listaProfiliReducer from '../reducers/listaProfiliReducer'

const state = {
  profili: {},
  esperienze: [],
  listaProfili: []
};

const bigReducer = combineReducers({
  profili: profiliReducer,
  esperienze : esperienzeReducer,
  listaProfili: listaProfiliReducer
});

console.log(state);

export const store = createStore(
  bigReducer,
  state,
  applyMiddleware(thunk) // Modifica qui
);
