import { applyMiddleware, createStore } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers';

export const store = createStore(
  reducers,
  applyMiddleware(ThunkMiddleware, logger)
);
