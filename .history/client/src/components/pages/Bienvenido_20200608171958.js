import React, { useState, Fragment } from 'react';

export const Bienvenido = () => {
  const [leerMas, setLeerMas] = useState(true);
  return (
    <div className='flex flex-col justify-between h-full'>
      {leerMas ? (
        <div className='flex flex-col justify-around items-center  md:mt-40'>
          <h3 className='text-left text-3xl mb-4 '>
            {' '}
            Unidos para estar divididos
          </h3>
          <button
            className='text-sm opacity-75 bg-transparent rounded bg-black hover:bg-gray-600 active:bg-blue-500 text-white px-3 py-2  focus:outline-none focus:font-bold mb-3'
            onClick={() => setLeerMas(!leerMas)}
          >
            <i className='fas fa-info'></i> Leer más
          </button>
        </div>
      ) : (
        <Fragment>
          <div className='landing m-2'>
            <p className='mb-2 text-left'>
              Sabemos que nadie esta yendo a escalar , pero para todos esos
              escaladores invisibles Ghost Climber los puede ayudar.
            </p>
            <p className='mb-2 text-left'>
              Ingresa y registra tu visita para poder dividrnos mejor en los
              sectores de escalada.{' '}
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
          <button
            className='block text-sm opacity-75 bg-transparent rounded bg-black hover:bg-gray-600 active:bg-blue-500 text-white px-3 py-2  focus:outline-none focus:font-bold mb-3'
            onClick={() => setLeerMas(!leerMas)}
          >
            Volver
          </button>
          <div className='flex w-full justify-center items-center'>
            <div className='w-full border-2 border-red-500 bg-red-100 rounded'>
              <h3 className='text-left ml-3 my-3 text-red-600'>
                <i className='fas fa-skull-crossbones'></i> ¡Importante!
              </h3>
              <p className='m-2 text-left '>
                Esta página te pide que respetes todas las medidas oficiales
                como el uso de mascarillas, el respeto a las cuarentenas, y
                sobre todo{' '}
                <span className='font-bold text-red-500'>
                  evita accidentes mientras los centros de salud están
                  saturados.
                </span>
              </p>
            </div>
          </div>
        </Fragment>
      )}

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
