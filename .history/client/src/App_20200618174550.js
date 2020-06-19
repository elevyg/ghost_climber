import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Landing from './components/pages/Landing';
import Acerca from './components/pages/Acerca';

import Alerts from './components/layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';

// Import Contexts
import ContadoresState from './context/contadores/ContadoresState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContadoresState>
        <AlertState>
          <Router>
            <Alerts />
            <Switch>
              <PrivateRoute exact path='/' component={Home} />
              <Route exact path='/landing' component={Landing} />
            </Switch>
          </Router>
        </AlertState>
      </ContadoresState>
    </AuthState>
  );
};

export default App;
