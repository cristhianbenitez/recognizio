import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { signinReducer } from './signinReducer';
import { signupReducer } from './signupReducer';
import { faceReducer } from './faceReducer';

const reducers = combineReducers({
  userReducer,
  signinReducer,
  signupReducer,
  faceReducer
});

export default reducers;
