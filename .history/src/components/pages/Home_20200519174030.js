import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import ZonasList from '../zonas/ZonasList';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <ZonasList />
      <footer className='bg-gray-100 h-40 '></footer>
    </Fragment>
  );
};

export default Home;
