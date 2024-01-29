import { applyMiddleware, combineReducers, createStore } from 'redux';
import {thunk} from 'redux-thunk';

import profiliReducer from '../reducers/profili';
import esperienzeReducer from '../reducers/esperienze';
import listaProfiliReducer from '../reducers/listaProfiliReducer'
import reducerAmico from '../reducers/reducerAmico';
import postReducer from '../reducers/post';

const state = {
  profili: {},
  esperienze: {},
  listaProfili: [],
  amico : {},
  post : {}
};

const bigReducer = combineReducers({
  profili: profiliReducer,
  esperienze : esperienzeReducer,
  listaProfili: listaProfiliReducer,
  amico: reducerAmico,
  post: postReducer
});

console.log(state);

export const store = createStore(
  bigReducer,
  state,
  applyMiddleware(thunk) // Modifica qui
);
