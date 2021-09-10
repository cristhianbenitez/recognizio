import React from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
const Navigation = ({ isSigning }) => {
  return (
    <nav className='flex justify-between '>
      <Logo />

      {isSigning === true ? (
        <div className='flex ma4'>
          <Link to='/signin'>
            <p className='f3 link dim white underline pa3 pointer'>Sign In</p>
          </Link>
          <Link to='/signup'>
            <p className='f3 link dim white underline pa3 pointer'>Sign Up</p>
          </Link>
        </div>
      ) : (
        <Link to='/signin'>
          <p className='f3 link dim white underline pa3 pointer ma4'>
            Sign Out
          </p>
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
