import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('user') ? (
          <Component {...props} />
        ) : (
          history.push('/')
        )
      }
    />
  );
};

export function IsUserRedirect({ loggedInPath, children, ...restProps }) {
  const user = localStorage.getItem('user');
  return (
    <Route
      {...restProps}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: '/'
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

export function ProtectedRoute({ children, ...restProps }) {
  const user = localStorage.getItem('user');
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: '/signin',
                state: { from: location }
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
