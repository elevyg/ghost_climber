import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Landing from './components/pages/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

// Import Contexts
import ContadoresState from './context/contadores/ContadoresState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

function App() {
  return (
    <div className='App h-screen'>
      <AuthState>
        <ContadoresState>
          <AlertState>
            <Router>
              <Fragment>
                <Route exact path='/' component={Home} />
                <Route exact path='/landing' component={Landing} />
              </Fragment>
            </Router>
          </AlertState>
        </ContadoresState>
      </AuthState>
    </div>
  );
}

export default App;
