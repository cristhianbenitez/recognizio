import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <article class='br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
      <main className='pa4 black-80'>
        <form className='measure tc'>
          <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
            <legend className='f1 fw6 ph0 mh0'>Sign Up</legend>
            <div className='mt3'>
              <label className='db fw6 lh-copy f6' for='email-address'>
                Email
              </label>
              <input
                className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                type='email'
                name='email-address'
                id='email-address'
              />
            </div>
            <div className='mv3'>
              <label className='db fw6 lh-copy f6' for='password'>
                Password
              </label>
              <input
                className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                type='password'
                name='password'
                id='password'
              />
            </div>
          </fieldset>
          <Link to='/signin'>
            <input
              className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
              type='submit'
              value='Sign up'
            />
          </Link>
        </form>
      </main>
    </article>
  );
};

export default Signup;