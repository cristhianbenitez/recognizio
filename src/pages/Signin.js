import React from 'react';
import ParticlesBkg from '../utils/ParticlesBkg';
import { Form } from '../components/Form/Form';
import { Navbar } from '../components/Navbar/Navbar';

const Signin = () => {
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
        <Form.Title>Sign In</Form.Title>
        <Form.Input label="Email" />
        <Form.Input label="Password" type="password" />
        <Form.Button>Sign In</Form.Button>
      </Form>
    </>
  );
};

export default Signin;
