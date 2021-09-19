import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Form, Navbar } from '../components';
import ParticlesBkg from '../utils/ParticlesBkg';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(true);

  const handleError = () => {
    !submitted && !email && !password ? setError(true) : setError(false);
  };

  const handleSignIn = () => {
    axios
      .post('https://intense-harbor-26195.herokuapp.com/signin', {
        email: email,
        password: password
      })
      .then(({ data }) => {
        if (data.id) {
          console.log(data);
          localStorage.setItem('user', JSON.stringify(data));
          return data;
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <ParticlesBkg />
      <Navbar>
        <Navbar.Logo />
        <Navbar.Container>
          <Navbar.Item link="/signin">Sign In</Navbar.Item>
          <Navbar.Item link="/signup">Sign Up</Navbar.Item>
        </Navbar.Container>
      </Navbar>
      <Form>
        <Form.Title>Sign In</Form.Title>
        {error ? (
          <Form.Alert onClose={handleError}>Wrong Credentials</Form.Alert>
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
        <Form.Button onClick={handleSignIn}>Sign In</Form.Button>
        <Link to="/signup" className="no-underline">
          <Form.SmallText>Sign Up</Form.SmallText>
        </Link>
      </Form>
    </>
  );
};
