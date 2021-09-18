import { applyMiddleware, createStore } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(ThunkMiddleware, logger));

export default store;
