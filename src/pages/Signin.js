import React, { useState } from 'react';
import axios from 'axios';
import { Form, Navbar } from '../components';
import ParticlesBkg from '../utils/ParticlesBkg';

export const SignIn = ({ loadUser, onRouteChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
    submitted && !email && !password ? setError(true) : setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleError();
    if (email && password) {
      return axios
        .post('https://intense-harbor-26195.herokuapp.com/signin', {
          email: email,
          password: password
        })
        .then(({ data }) => {
          if (data.id) {
            setSubmitted(true);
            loadUser(data);
            onRouteChange('home');
          }
        })
        .catch(() => {
          setError(true);
          setSubmitted(false);
        });
    }
  };

  const jumpHome = () => {};

  return (
    <>
      <ParticlesBkg />
      <Navbar>
        <Navbar.Logo />
        <Navbar.Container>
          <Navbar.Item onClick={() => onRouteChange('signin')}>
            Sign In
          </Navbar.Item>
          <Navbar.Item onClick={() => onRouteChange('signup')}>
            Sign Up
          </Navbar.Item>
        </Navbar.Container>
      </Navbar>
      <Form name="form" onSubmit={handleSubmit}>
        <Form.Title>Sign In</Form.Title>
        {error ? (
          <Form.Alert onClose={() => setError(false)}>
            Wrong Credentials
          </Form.Alert>
        ) : null}
        <Form.Input
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Input
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Button>Sign In</Form.Button>
        <Form.Button onClick={() => onRouteChange('home')}>
          Jump to Home
        </Form.Button>
        <Form.SmallText onClick={() => onRouteChange('home')}>
          Sign Up
        </Form.SmallText>
      </Form>
    </>
  );
};
