import { combineReducers } from 'redux';
import { user } from './user.reducer';
import { auth } from './auth.reducer';
import { signup } from './signup.reducers';
import { alert } from './alert.reducer';

const reducers = combineReducers({
  user,
  auth,
  signup,
  alert
});

export default reducers;
