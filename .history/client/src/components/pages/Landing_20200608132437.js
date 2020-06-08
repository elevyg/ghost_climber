import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';

const Landing = () => {
  return (
    <Fragment>
      <Navbar isDateBox={false} />
      <div className='flex w-full h-full justify-center items-stretch'>
        <div className='w-1/2 p-3 text-center'>
          <h1 className='text-2xl '>Bienvenido a Ghost Climber</h1>
        </div>
        <div className='w-1/2'></div>
      </div>
      ;
    </Fragment>
  );
};

export default Landing;
