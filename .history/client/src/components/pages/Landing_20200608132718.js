import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';

const Landing = () => {
  return (
    <Fragment>
      <div className='flex w-full h-full justify-center items-stretch'>
        <div className='w-1/2 p-3 text-center'>
          <h1 className='p-2 mr-4 inline-flex items-center'>
            <i className='fas fa-ghost fa-3x mx-2'></i>
            <span className='text-3xl text-gray font-bold uppercase tracking-wide'>
              Ghost Climber
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
