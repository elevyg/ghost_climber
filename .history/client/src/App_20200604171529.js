import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Dev from './components/pages/Dev';
import ZonasState from './context/zonas/ZonasState';
import ContadoresState from './context/contadores/ContadoresState';

function App() {
  return (
    <div className='App h-screen'>
      <ZonasState>
        <ContadoresState>
          <Router>
            <Fragment>
              <Route exact path='/' component={Home} />
              <Route exact path='/dev' component={Dev} />
            </Fragment>
          </Router>
        </ContadoresState>
      </ZonasState>
    </div>
  );
}

export default App;
