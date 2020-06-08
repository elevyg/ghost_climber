import React, { Fragment, useState } from 'react';
import Register from '../auth/Register';
import Login from '../auth/Login';

const Landing = () => {
  const [leerMas, setLeerMas] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <Fragment>
      <div className='flex w-full h-full justify-center items-stretch overflow-hidden'>
        <div className='w-1/2 p-3 text-center bg-gray-200 flex flex-col justify-center'>
          <h3 className='text-left text-3xl mb-4'> Bienvenido,</h3>
          <p className='mb-2 text-left'>
            Sabemos que nadie esta yendo a escalar{' '}
            <i class='fas fa-smile-wink'></i>, pero si para todos esos
            escaladores invisibles está Ghost Climber.
          </p>

          <p className='mb-2 text-left'>
            Ingresa y registra tu visita para poder dividrnos mejor en los
            sectores de escalada.{' '}
          </p>
          <input
            className='block self-start bg-transparent focus:outline-none focus:font-bold mb-3'
            type='submit'
            value='Leer más...'
            onClick={() => setLeerMas(!leerMas)}
          />
          {leerMas && (
            <div className='landing m-2'>
              <p className='mb-3 text-left'>
                Esta página fue diseñada para mantener el distanciamiento social
                en zonas de escalada mientras el COVID sigue en nuestras vidas.
                Los momentos más duros de esta pandemia pasarán pero la
                normalidad no llegará a nuestras vidas durante un buen tiempo.
              </p>
              <p className='mb-3 text-left'>
                <span>
                  <span className=' text-gray font-bold uppercase tracking-wide'>
                    Ghost Climber
                  </span>
                </span>{' '}
                busca ayudar a los escaladores que viven en los alrededores de
                Santiago a distriubirse en los distintos sectores y evitar las
                aglomeraciones que estaban sucediendo.
              </p>
            </div>
          )}
          <div className='flex w-full justify-center items-center'>
            <div className='w-full border-2 border-red-500 bg-red-100 rounded'>
              <h3 className='text-left ml-3 my-3 text-red-600'>
                <i class='fas fa-skull-crossbones'></i> ¡Importante!
              </h3>
              <p className='m-2 text-left '>
                Esta página te pide que respetes todas las medidas oficiales
                como el uso de mascarillas y el respeto a las cuarentenas, entre
                otras.
              </p>
            </div>
          </div>

          <div className='mt-5'>
            Este es un proyecto código abierto, aporta en{' '}
            <a href='https://github.com/elevyg/ghost_climber' target='_blank'>
              <i class='fab fa-2x fa-github-square hover:text-blue-500'></i>
            </a>
          </div>
        </div>
        {/* Segunda mitad */}
        <div className='w-1/2 h-full flex flex-col justify-center items-center'>
          <div className=' p-2 mr-4 inline-flex items-center mt-5'>
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
            <div className=' w-11/12 m-3 pt-3 px-3 bg-gray-200 border'>
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
      </div>
      ;
    </Fragment>
  );
};

export default Landing;
