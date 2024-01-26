import { applyMiddleware, combineReducers, createStore } from 'redux';
import {thunk} from 'redux-thunk';

import profiliReducer from '../reducers/profili';
import esperienzeReducer from '../reducers/esperienze';

const state = {
  profili: {},
  esperienze: {},
};

const bigReducer = combineReducers({
  profili: profiliReducer,
  esperienze : esperienzeReducer
});

console.log(state);

export const store = createStore(
  bigReducer,
  state,
  applyMiddleware(thunk) // Modifica qui
);
