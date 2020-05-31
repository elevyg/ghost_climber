import React from 'react';
import GhostCounter from './GhostCounter';

const SectorCard = ({ sector }) => {
  const { nombre, subsectores } = sector;

  return (
    <div className='rounded overflow-hidden shadow-lg m-3 w-full mx-3'>
      <div className=''>
        <div className='px-3 font-bold text-2xl  bg-gray-300 '>{nombre}</div>
      </div>
    </div>
  );
};

export default SectorCard;
