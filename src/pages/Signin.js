import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Form, Navbar } from '../components';
import ParticlesBkg from '../utils/ParticlesBkg';
import { userActions } from '../actions';
import { useHistory } from 'react-router-dom';
export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const { signin, signout } = bindActionCreators(userActions, dispatch);

  useEffect(() => {
    signout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleError = () => {
    setError(true);
    !submitted && !email && !password ? setError(true) : setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    handleError();
    if (email && password) {
      signin(email, password);
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
        <Link to="/signup" className="no-underline">
          <Form.SmallText>Sign Up</Form.SmallText>
        </Link>
      </Form>
    </>
  );
};
