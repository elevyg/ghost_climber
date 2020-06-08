import React, { Fragment, useState } from 'react';
import Register from '../auth/Register';
import Login from '../auth/Login';
import { Bienvenido } from './Bienvenido';

const Landing = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <Fragment>
      <div className='flex flex-col md:flex-row w-full md:h-full md:justify-center md:items-stretch'>
        <div className='hidden md:flex flex-col w-1/2 h-full p-3 text-center bg-gray-200  justify-between'>
          <Bienvenido />
        </div>
        {/* Segunda mitad */}
        <div className='md:w-1/2 h-screen md:h-full flex flex-col justify-center items-center'>
          <div className=' p-2 md:mr-4 inline-flex items-center mb-10 md:mt-5'>
            <i className='fas fa-ghost fa-3x mx-2 '></i>
            <span className='text-3xl text-gray font-bold uppercase tracking-wide'>
              Ghost Climber
            </span>
          </div>
          <div className='w-11/12 p-5 bg-gray-200 border'>
            {showRegister ? <Register /> : <Login />}
          </div>
          {!showRegister ? (
            <div className=' w-11/12 m-3 pt-3 px-3 bg-gray-200 border'>
              ¿No tienes cuenta?,{' '}
              <input
                className='inline-block bg-transparent text-blue-500 focus:outline-none focus:font-bold mb-5'
                type='submit'
                value='Regístrate'
                onClick={() => setShowRegister(true)}
              />
            </div>
          ) : (
            <div className='w-11/12 m-3 pt-3 px-3 bg-gray-200 border self-center '>
              Ya tienes cuenta,{' '}
              <input
                className='inline-block bg-transparent text-blue-500 focus:outline-none focus:font-bold mb-5'
                type='submit'
                value='Iniciar Sesión'
                onClick={() => setShowRegister(false)}
              />
            </div>
          )}
        </div>
        <div className='md:hidden h-screen p-3 text-center bg-gray-200  justify-aroun'>
          <Bienvenido />
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
