import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';

const Landing = () => {
  return (
    <Fragment>
      <div className='flex w-full h-full justify-center items-stretch'>
        <div className='w-1/2 p-3 text-center bg-gray-200'>
          <h1 className='p-2 mr-4 inline-flex items-center mt-5'>
            <i className='fas fa-ghost fa-3x mx-2'></i>
            <span className='text-3xl text-gray font-bold uppercase tracking-wide'>
              Ghost Climber
            </span>
          </h1>
          <div className='m-2'>
            <h3 className='text-left mb-4'> Bienvenido a Ghost Climber,</h3>
            <p>
              Esta página fue diseñada para mantener el distanciamiento social
              mientras el COVID sigue en nuestras vidas.
            </p>
            <p>
              Los momentos más duros de esta pandemia pasarán pero la normalidad
              no llegará a nuestras vidas durante un buen tiempo.
            </p>
          </div>
        </div>
        <div className='w-1/2'></div>
      </div>
      ;
    </Fragment>
  );
};

export default Landing;
