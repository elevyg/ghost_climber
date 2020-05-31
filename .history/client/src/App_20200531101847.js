import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import ZonasState from './context/zonas/ZonasState';

function App() {
  return (
    <div className='App'>
      <ZonasState>
        <Router>
          <Fragment>
            <Home />
          </Fragment>
        </Router>
      </ZonasState>
    </div>
  );
}

export default App;
