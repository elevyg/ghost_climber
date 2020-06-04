import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import ZonasList from '../zonas/ZonasList';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='flex'>
        <ZonasList />
      </div>
      <footer className='bg-gray-100 h-screen flex justify-center items-start overflow-hidden pt-20 '>
        <p> Todos los derechos reservados {'\u00A9'} </p>
      </footer>
    </Fragment>
  );
};

export default Home;
