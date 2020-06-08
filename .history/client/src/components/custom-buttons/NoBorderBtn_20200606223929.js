import React, { useContext } from 'react';
import ContadoresContext from '../../context/contadores/contadoresContext';

const NoBorderBtn = ({ titulo, funcion }) => {
  const contadoresContext = useContext(ContadoresContext);
  // const { getContadorSector, zonas } = contadoresContext;
  return (
    <div>
      <button
        className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1'
        type='button'
        style={{ transition: 'all .15s ease' }}
        onClick={() => {
          funcion(false);
          // getContadorSector(zonas);
        }}
      >
        {titulo}
      </button>
    </div>
  );
};

export default NoBorderBtn;
