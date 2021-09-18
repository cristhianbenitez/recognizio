import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { history } from './helpers/history';
import { actions } from './state';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
function App() {
  const dispatch = useDispatch();
  const { clearAlerts } = bindActionCreators(actions, dispatch);

  history.listen((location, action) => {
    //clear alert on location change
    clearAlerts();
  });

  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
