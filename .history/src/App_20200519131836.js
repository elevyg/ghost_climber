import React from 'react';
import Home from './components/pages/Home';

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
