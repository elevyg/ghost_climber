import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import DevEnv from './components/pages/DevEnv';
import ZonasState from './context/zonas/ZonasState';
import ContadoresState from './context/contadores/contadoresState';

function App() {
  return (
    <div className='App'>
      <ContadoresState>
        <ZonasState>
          <Router>
            <Fragment>
              <Route exact path='/' component={Home} />

              <Route exact path='/devenv' component={DevEnv} />
            </Fragment>
          </Router>
        </ZonasState>
      </ContadoresState>
    </div>
  );
}

export default App;
