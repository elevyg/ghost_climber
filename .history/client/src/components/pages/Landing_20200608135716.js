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
          <div className='landing m-2'>
            <h3 className='text-left mb-4'> Bienvenido a Ghost Climber,</h3>
            <p className='mb-2 text-left'>
              Esta página fue diseñada para mantener el distanciamiento social
              en zonas de escalada mientras el COVID sigue en nuestras vidas.
              Los momentos más duros de esta pandemia pasarán pero la normalidad
              no llegará a nuestras vidas durante un buen tiempo.
            </p>
            <p className='mb-2 text-left'>
              <span>
                <i className='fas fa-ghost mx-2'></i>
                <span className=' text-gray font-bold uppercase tracking-wide'>
                  Ghost Climber
                </span>
              </span>{' '}
              busca ayudar a los escaladores que viven en los alrededores de
              Santiago a distriubirse en los distintos sectores de escalada y
              evitar las aglomeraciones que estaban sucediendo.
            </p>
            <p className='mb-2 text-left'>
              Inicia sesión e ingresa tu visita. Debes iniciar sesión para poder
              agregar y borrar tus visitas, tu información es totalmente
              anónima. Puedes ocupar un nombre de usuario distinto a tu nombre
              si así lo deseas.{' '}
            </p>
          </div>
          <div className='flex w-full justify-center items-center'>
            <div className='w-3/4 border-2 border-red-300 rounded'>
              <h3 className='text-center text-red-600'>¡Importante!</h3>
              <p> Esta página </p>
            </div>
          </div>
        </div>
        <div className='w-1/2'></div>
      </div>
      ;
    </Fragment>
  );
};

export default Landing;
