import React from 'react';
import { Logo } from '../Logo/Logo';

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
    <a className="no-underline" {...restProps}>
      <p className="f3 pa3 pointer dim link fw6 db white link dim">
        {children}
      </p>
    </a>
  );
};
Navbar.Container = ({ children, ...restProps }) => {
  return (
    <div className="flex ma4" {...restProps}>
      {children}
    </div>
  );
};
