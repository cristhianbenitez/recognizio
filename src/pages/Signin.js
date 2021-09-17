import React, { useState } from 'react';
import ParticlesBkg from '../utils/ParticlesBkg';
import { Form } from '../components/Form/Form';
import { Navbar } from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email);
  console.log(password);
  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };
  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleSignIn = () => {
    axios
      .post('https://intense-harbor-26195.herokuapp.com/signin', {
        email: email,
        password: password
      })
      .then(({ data }) => {
        if (data === 'success') {
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
        <Form.Title>Sign In</Form.Title>
        <Form.Input label="Email" onChange={handleEmail} />
        <Form.Input
          label="Password"
          type="password"
          onChange={handlePassword}
        />
        <Link to="/home" className="no-underline">
          <Form.Button onClick={handleSignIn}>Sign In</Form.Button>
        </Link>
        <Link to="/signup" className="no-underline">
          <Form.SmallText>Sign Up</Form.SmallText>
        </Link>
      </Form>
    </>
  );
};

export default Signin;
