import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Dev from './components/pages/Dev';
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
                <Route exact path='/dev' component={Dev} />
              </Fragment>
            </Router>
          </AlertState>
        </ContadoresState>
      </AuthState>
    </div>
  );
}

export default App;
