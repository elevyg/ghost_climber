import React, { useState, Fragment } from 'react';

export const Bienvenido = () => {
  const [leerMas, setLeerMas] = useState(false);
  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='flex flex-col justify-center items-center  md:mt-40'>
        <h3 className='text-left text-3xl mb-4 '>
          {' '}
          Unidos para estar divididos
        </h3>
        <p>Registra tu visita</p>
        <p>Escala con cuidado</p>
        <p></p>
        <button
          className='block text-sm opacity-75 bg-transparent rounded bg-black hover:bg-gray-600 active:bg-blue-500 text-white px-3 py-2  focus:outline-none focus:font-bold mb-3'
          onClick={() => setLeerMas(!leerMas)}
        >
          <i class='fas fa-info'></i> Leer más
        </button>

        {leerMas && (
          <Fragment>
            <div className='landing m-2'>
              <p className='mb-3 text-left'>
                <p className='mb-2 text-left'>
                  Sabemos que nadie esta yendo a escalar , pero si para todos
                  esos escaladores invisibles está Ghost Climber.
                </p>
                <p className='mb-2 text-left'>
                  Ingresa y registra tu visita para poder dividrnos mejor en los
                  sectores de escalada.{' '}
                </p>
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

            <div className='flex w-full justify-center items-center'>
              <div className='w-full border-2 border-red-500 bg-red-100 rounded'>
                <h3 className='text-left ml-3 my-3 text-red-600'>
                  <i className='fas fa-skull-crossbones'></i> ¡Importante!
                </h3>
                <p className='m-2 text-left '>
                  Esta página te pide que respetes todas las medidas oficiales
                  como el uso de mascarillas y el respeto a las cuarentenas,
                  entre otras.
                </p>
              </div>
            </div>
          </Fragment>
        )}
      </div>
      {/* Github link */}
      <div className='text-sm text-gray-700 mt-10'>
        Este es un proyecto código abierto, aporta en{' '}
        <a
          href='https://github.com/elevyg/ghost_climber'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-2x fa-github-square hover:text-blue-500'></i>
        </a>
      </div>
    </div>
  );
};
