import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Landing from './components/pages/Landing';
import PrivateRoute from './components/routing/PrivateRoute';

// Import Contexts
import ContadoresState from './context/contadores/ContadoresState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <div className='App h-screen'>
      <AuthState>
        <ContadoresState>
          <AlertState>
            <Router>
              <Fragment>
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/landing' component={Landing} />
                </Switch>
              </Fragment>
            </Router>
          </AlertState>
        </ContadoresState>
      </AuthState>
    </div>
  );
}

export default App;
