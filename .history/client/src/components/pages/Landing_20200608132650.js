import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';

const Landing = () => {
  return (
    <Fragment>
      <div className='flex w-full h-full justify-center items-stretch'>
        <div className='w-1/2 p-3 text-center'>
          <h1 to='/' className='p-2 mr-4 inline-flex items-center border-r-2'>
            <i className='fas fa-ghost fa-2x mx-2'></i>
            <span className='text-xl text-gray font-bold uppercase tracking-wide'>
              Ghost Climbers
            </span>
          </h1>
        </div>
        <div className='w-1/2'></div>
      </div>
      ;
    </Fragment>
  );
};

export default Landing;
