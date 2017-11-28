import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancer(
  applyMiddleware(thunk),
);

const INITIAL_STATE = {};

const Store = createStore(reducer, INITIAL_STATE, enhancer);

export default Store;