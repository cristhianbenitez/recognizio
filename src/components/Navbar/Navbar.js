import React from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

export const Navbar = ({ children, ...restProps }) => {
  return (
    <nav className="flex justify-between " {...restProps}>
      {children}
    </nav>
  );
};

Navbar.Logo = ({ ...restProps }) => {
  return <Logo {...restProps} />;
};
Navbar.Item = ({ children, link, ...restProps }) => {
  return (
    <Link to={link} className="no-underline" {...restProps}>
      <p className="f3 pa3 pointer dim link fw6 db white link dim">
        {children}
      </p>
    </Link>
  );
};
Navbar.Container = ({ children, ...restProps }) => {
  return (
    <div className="flex ma4" {...restProps}>
      {children}
    </div>
  );
};
