import { combineReducers } from 'redux';
import { userReducer } from './user.reducer';
import { faceReducer } from './face.reducer';

const reducers = combineReducers({
  userReducer,
  faceReducer
});

export default reducers;
