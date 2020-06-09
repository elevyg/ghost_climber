import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import GhostLoading from '../../components/layout/GhostLoading';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <GhostLoading />
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to='/landing' />
        )
      }
    />
  );
};

export default PrivateRoute;
