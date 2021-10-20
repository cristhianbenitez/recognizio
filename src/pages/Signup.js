import React, { useState } from 'react';
import axios from 'axios';
import ParticlesBkg from '../utils/ParticlesBkg';
import { Form, Navbar } from '../components';

export const SignUp = ({ loadUser, onRouteChange }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleError = () => {
    !submitted && !email && !password ? setError(true) : setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleError();
    if (email && password) {
      return axios
        .post('https://intense-harbor-26195.herokuapp.com/signup', {
          name: name,
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
      <Form onSubmit={handleSubmit}>
        <Form.Title>Sign Up</Form.Title>
        {error ? (
          <Form.Alert onClose={() => setError(false)}>
            Wrong Credentials
          </Form.Alert>
        ) : null}
        <Form.Input
          label="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Input
          name="email"
          label="Email"
          id="outlined-adornment-password"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Input
          name="pass"
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Button>Sign Up</Form.Button>
      </Form>
    </>
  );
};
