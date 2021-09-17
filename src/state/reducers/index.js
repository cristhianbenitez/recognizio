import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { signinReducer } from './signinReducer';
import { faceReducer } from './faceReducer';

const reducers = combineReducers({
  userReducer,
  faceReducer,
  signinReducer
});

export default reducers;
