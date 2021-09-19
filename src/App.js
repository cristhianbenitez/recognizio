import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { Home, SignIn, SignUp } from './pages';
import { alertActions } from './actions';
import { history, PrivateRoute } from './helpers';

function App() {
  const dispatch = useDispatch();
  const { clear } = bindActionCreators(alertActions, dispatch);

  history.listen((location, action) => {
    //clear alert on location change
    clear();
  });

  return (
    <Router history={history}>
      <div>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
