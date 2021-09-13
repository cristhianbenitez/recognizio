import React from 'react';
import ParticlesBkg from '../utils/ParticlesBkg';
import { Form } from '../components/Form/Form';
import { Navbar } from '../components/Navbar/Navbar';

const Signup = () => {
  return (
    <>
      <ParticlesBkg />
      <Navbar>
        <Navbar.Logo />
        <Navbar.Container>
          <Navbar.Item>Sign In</Navbar.Item>
          <Navbar.Item>Sign Up</Navbar.Item>
        </Navbar.Container>
      </Navbar>
      <Form>
        <Form.Title>Sign Up</Form.Title>
        <Form.Input label="Name" />
        <Form.Input label="Email" id="outlined-adornment-password" />
        <Form.Input label="Password" type="password" />
        <Form.Button>Sign In</Form.Button>
      </Form>
    </>
  );
};

export default Signup;
