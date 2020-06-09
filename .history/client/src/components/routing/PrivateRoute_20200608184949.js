import React, { useContext, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, loading } = authContext;

  return (
    <Fragment>
      {console.log('Hello')}
      {console.log(isAuthenticated)}
      {console.log(loading)}
      {console.log('Hello')}
      {console.log(!isAuthenticated && !loading)}
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated && loading ? (
            <Redirect to='/login' />
          ) : (
            <Component {...props} />
          )
        }
      />
    </Fragment>
  );
};

export default PrivateRoute;
