import React, { useState } from 'react';
import ParticlesBkg from '../utils/ParticlesBkg';
import { Form } from '../components/Form/Form';
import { Navbar } from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleName = ({ target }) => {
    setName(target.value);
  };
  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };
  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleSignin = () => {
    axios
      .post('https://intense-harbor-26195.herokuapp.com/signin', {
        name: name,
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
        <Form.Title>Sign Up</Form.Title>
        <Form.Input label="Name" onChange={handleName} />
        <Form.Input
          label="Email"
          id="outlined-adornment-password"
          onChange={handleEmail}
        />
        <Form.Input
          label="Password"
          type="password"
          onChange={handlePassword}
        />
        <Link to="/signin" className="no-underline">
          <Form.Button>Sign Up</Form.Button>
        </Link>
      </Form>
    </>
  );
};

export default Signup;
