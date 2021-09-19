import React, { useState } from 'react';
import ParticlesBkg from '../utils/ParticlesBkg';
import { Form, Navbar } from '../components';
import axios from 'axios';

export const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(true);

  const handleError = () => {
    !submitted && !email && !password ? setError(true) : setError(false);
  };
  const handleSignUp = () => {
    axios
      .post('https://intense-harbor-26195.herokuapp.com/signup', {
        name: email,
        email: name,
        password: password
      })
      .then(({ data }) => {
        if (data.id) {
          localStorage.setItem('user', JSON.stringify(data));
          return data;
        }
      });
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
        <Form.Title>Sign Up</Form.Title>
        {error ? (
          <Form.Alert onClose={handleError}>Wrong Credentials</Form.Alert>
        ) : null}
        <Form.Input label="Name" onChange={(e) => setName(e.target.value)} />
        <Form.Input
          label="Email"
          id="outlined-adornment-password"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Input
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Button onClick={handleSignUp}>Sign Up</Form.Button>
      </Form>
    </>
  );
};
