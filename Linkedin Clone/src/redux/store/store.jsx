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
import EsperAmico from '../reducers/EsperAmico';

const state = {
  profili: {},
  esperienze: {},
  listaProfili: [],
  amico : {},
  listaLavori: [],
  lavoriTrovati: '',
  listaPreferiti: [],
  post : {},
  mieiPost : [],
  expAmico:[]
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
  mieiPost: myPostReducer,
  expAmico:EsperAmico
});

console.log(state);

export const store = createStore(
  bigReducer,
  state,
  applyMiddleware(thunk) // Modifica qui
);
