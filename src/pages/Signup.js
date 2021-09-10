import React from 'react';
import ParticlesBkg from '../utils/ParticlesBkg';
import Form from '../components/Form/Form';
import Navigation from '../components/Navigation/Navigation';

const Signup = () => {
  return (
    <d>
      <ParticlesBkg />
      <Navigation isSigning={true} />
      <Form
        signValue='Sign Up'
        isSigningIn={false}
        isSigningUp={true}
        linkedTo='/signin'
      />
    </d>
  );
};

export default Signup;
