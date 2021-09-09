import React from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <nav className='flex justify-between '>
      <Logo />
      <Link to='/signin'>
        <p className='f3 link dim black underline pa3 pointer'>Sign Out</p>
      </Link>
    </nav>
  );
};

export default Navigation;
