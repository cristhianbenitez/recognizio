import React from 'react';
import Logo from '../Logo/Logo';

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
Navbar.Item = ({ children, ...restProps }) => {
  return <p className="f3 link dim white underline pa3 pointer">{children}</p>;
};
Navbar.Container = ({ children, ...restProps }) => {
  return (
    <div className="flex ma4" {...restProps}>
      {children}
    </div>
  );
};

// {
//   isSigning === true ? (
//     <div className="flex ma4">
//       <Link to="/signin">
//         <p className="f3 link dim white underline pa3 pointer">Sign In</p>
//       </Link>
//       <Link to="/signup">
//         <p className="f3 link dim white underline pa3 pointer">Sign Up</p>
//       </Link>
//     </div>
//   ) : (
//     <Link to="/signin">
//       <p className="f3 link dim white underline pa3 pointer ma4">Sign Out</p>
//     </Link>
//   );
// }
