import React from 'react';

export const Cerrar = ({ titulo, funcion }) => {
  return (
    <div>
      <button
        className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1'
        type='button'
        style={{ transition: 'all .15s ease' }}
        onClick={() => funcion(false)}
      >
        {titulo}
      </button>
    </div>
  );
};
