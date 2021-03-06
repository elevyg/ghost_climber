import React, { useContext, useEffect } from 'react';
import GhostCounter from '../batches/GhostCounter';
import ContadoresContext from '../../context/contadores/contadoresContext';

const SubSectorCard = ({ sb }) => {
  const contadoresContext = useContext(ContadoresContext);
  const { contadores } = contadoresContext;

  let contGlobal;

  if (contadores) {
    contGlobal = contadores.filter((cont) => cont.subsector._id === sb._id)[0]
      .contador;
  }
  return (
    <div>
      <div
        key={sb._id}
        className='box-border flex items-center justify-center w-full h-full border-b hover:bg-gray-200'
      >
        <div className='w-full px-2 py-3'>
          <p className=' text-lg mb-1 text-black '>{sb.nombre}</p>
          <p className=' text-xs mb-1 text-gray-700 '>
            {`Número de vías: ${sb.nVias}`}
          </p>
        </div>
        <div className='w-full'>
          {contGlobal && (
            <GhostCounter subsector={sb._id} contGlobal={contGlobal} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SubSectorCard;
