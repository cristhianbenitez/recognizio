import React, { useState } from 'react';
import ParticlesBkg from '../utils/ParticlesBkg';
import { Form, Navbar } from '../components';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userActions } from '../actions';

export const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const { signup } = bindActionCreators(userActions, dispatch);

  const handleError = () => {
    !submitted && !email && !password ? setError(true) : setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    handleError();
    if (email && password && name) {
      signup({ email, password, name });
    }
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
