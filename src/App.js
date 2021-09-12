import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  useEffect(() => {
    axios.get('http://localhost:3000/').then(({ data }) => {
      console.log(data);
    });
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          {}
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
      </div>
    </Router>
  );
}

export default App;
