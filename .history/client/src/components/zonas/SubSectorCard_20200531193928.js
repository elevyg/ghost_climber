import React from 'react';
import GhostCounter from '../batches/GhostCounter';
import ContadoresContext from '../../context/contadores/contadoresContext';

const SubSectorCard = ({ sb }) => {
  return (
    <div>
      <div
        key={sb._id}
        className='box-border flex items-center justify-center w-full h-24 border-b hover:bg-gray-200'
      >
        <div className='w-full p-2 '>
          <p className=' text-lg mb-1 text-black '>{sb.nombre}</p>
          <p className=' text-xs mb-1 text-gray-700 '>
            {`Número de vías: ${sb.nVias}`}
          </p>
        </div>
        <div className='w-full '>
          <GhostCounter subsector={sb._id} />
        </div>
      </div>
    </div>
  );
};

export default SubSectorCard;
