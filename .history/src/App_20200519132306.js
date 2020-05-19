import React, { Fragment } from 'react';
import Home from './components/pages/Home';
import ZonasState from './context/zonas/ZonasState';

function App() {
  return (
    <div className='App'>
      <ZonasState>
        <Home />
      </ZonasState>
    </div>
  );
}

export default App;
