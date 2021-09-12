import React from 'react';
import ParticlesBkg from '../utils/ParticlesBkg';
import { Form } from '../components/Form/Form';
import Navigation from '../components/Navigation/Navigation';

const Signup = () => {
  return (
    <>
      <ParticlesBkg />
      <Navigation isSigning={true} />
      <Form>
        <Form.Title>Sign Up</Form.Title>
        <Form.Input label="Email" />
        <Form.Input label="Name" />
        <Form.Input label="Password" />
        <Form.Button>Sign In</Form.Button>
      </Form>
    </>
  );
};

export default Signup;
