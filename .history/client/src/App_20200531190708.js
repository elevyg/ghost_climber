import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import DevEnv from './components/pages/DevEnv';
import ZonasState from './context/zonas/ZonasState';
import ContadoresState from './context/contadores/contadoresState';

function App() {
  return (
    <div className='App'>
      <ZonasState>
        <Router>
          <Fragment>
            <Route exact path='/' component={Home} />
            <ContadoresState>
              <Route exact path='/devenv' component={DevEnv} />
            </ContadoresState>
          </Fragment>
        </Router>
      </ZonasState>
    </div>
  );
}

export default App;
