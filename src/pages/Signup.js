import React, { useState } from 'react';
import ParticlesBkg from '../utils/ParticlesBkg';
import { Form } from '../components/Form/Form';
import { Navbar } from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSignUp = () => {
    axios
      .post('https://intense-harbor-26195.herokuapp.com/signup', {
        name: inputs.email,
        email: inputs.name,
        password: inputs.password
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
        <Form.Input
          label="Name"
          onChange={(e) => setInputs({ name: e.target.value })}
        />
        <Form.Input
          label="Email"
          id="outlined-adornment-password"
          onChange={(e) => setInputs({ email: e.target.value })}
        />
        <Form.Input
          label="Password"
          type="password"
          onChange={(e) => setInputs({ password: e.target.value })}
        />
        <Link to="/signun" className="no-underline">
          <Form.Button onClick={handleSignUp}>Sign Up</Form.Button>
        </Link>
      </Form>
    </>
  );
};

export default Signup;
