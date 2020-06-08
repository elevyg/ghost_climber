import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';

const Landing = () => {
  return (
    <Fragment>
      <Navbar isDateBox={false} />
      <div className='flex w-full h-full justify-center items-stretch'>
        <div className='w-1/2'></div>
        <div className='w-1/2'></div>
      </div>
      ;
    </Fragment>
  );
};

export default Landing;
