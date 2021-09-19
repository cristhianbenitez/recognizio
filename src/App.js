import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, SignIn, SignUp } from './pages';

import { history } from './helpers/history';

function App() {
  history.listen((location, action) => {
    //clear alert on location change
    // clearAlerts();
  });

  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
