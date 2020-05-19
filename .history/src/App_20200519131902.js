import React from 'react';
import Home from './components/pages/Home';
import ZonasContext from './context/zonas/zonasContext';

function App() {
  return (
    <div className='App'>
      <ZonasContext>
        <Home />
      </ZonasContext>
    </div>
  );
}

export default App;
