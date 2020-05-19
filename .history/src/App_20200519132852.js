import React, { Fragment } from 'react';
import Home from './components/pages/Home';
import ZonasState from './context/zonas/ZonasState';

function App() {
  return (
    <div className='App'>
      <ZonasState>
        <Fragment>
          <Home />
        </Fragment>
      </ZonasState>
    </div>
  );
}

export default App;
