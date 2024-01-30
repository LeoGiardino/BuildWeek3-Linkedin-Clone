import { applyMiddleware, combineReducers, createStore } from 'redux';
import {thunk} from 'redux-thunk';

import profiliReducer from '../reducers/profili';
import esperienzeReducer from '../reducers/esperienze';
import listaProfiliReducer from '../reducers/listaProfiliReducer'
import reducerAmico from '../reducers/reducerAmico';
import listaLavoriReducer from '../reducers/listaLavoriReducer';
import SearchJob from '../reducers/SearchJob';
import preferitiReducer from '../reducers/preferitiReducer';
import postReducer from '../reducers/post';
import myPostReducer from '../reducers/myPost'

const state = {
  profili: {},
  esperienze: {},
  listaProfili: [],
  amico : {},
  listaLavori: [],
  lavoriTrovati: '',
  listaPreferiti: [],
  post : {},
  mieiPost : []
};

const bigReducer = combineReducers({
  profili: profiliReducer,
  esperienze : esperienzeReducer,
  listaProfili: listaProfiliReducer,
  amico: reducerAmico,
  listaLavori: listaLavoriReducer,
  lavoriTrovati: SearchJob,
  listaPreferiti: preferitiReducer,
  post: postReducer,
  mieiPost: myPostReducer
});

console.log(state);

export const store = createStore(
  bigReducer,
  state,
  applyMiddleware(thunk) // Modifica qui
);
