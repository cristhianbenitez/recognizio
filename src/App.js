import React, { useEffect, useState } from 'react';
import { Home, SignIn, SignUp } from './pages';

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
};

const App = () => {
  const [state, setState] = useState(initialState);

  const loadUser = (data) => {
    setState((prevState) => ({
      ...prevState,
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    }));
    localStorage.setItem('user', JSON.stringify(data));
  };

  const onRouteChange = (route) => {
    if (route === 'signout') setState(initialState);
    else if (route === 'home')
      setState((prevState) => ({ ...prevState, isSignedIn: true }));
    setState((prevState) => ({ ...prevState, route: route }));
  };

  useEffect(() => {
    if (localStorage.user) {
      onRouteChange('home');
      const data = JSON.parse(localStorage.user);
      setState((prevState) => ({
        ...prevState,
        user: {
          id: data.id,
          name: data.name,
          email: data.email,
          entries: data.entries,
          joined: data.joined
        }
      }));
    }
  }, []);
  return state.route === 'home' ? (
    <Home user={state.user} onRouteChange={onRouteChange} />
  ) : state.route === 'signin' ? (
    <SignIn loadUser={loadUser} onRouteChange={onRouteChange} />
  ) : (
    <SignUp loadUser={loadUser} onRouteChange={onRouteChange} />
  );
};

export default App;
