import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import ZonasList from '../zonas/ZonasList';
import Form from '../layout/Form';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='flex flex-no-wrap flex-shrink'>
        <ZonasList />
        <Form />
      </div>
      <footer className='bg-gray-100 h-40 '></footer>
    </Fragment>
  );
};

export default Home;
