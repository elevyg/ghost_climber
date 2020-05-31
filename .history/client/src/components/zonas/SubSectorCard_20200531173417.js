import React from 'react';
import GhostCounter from '../batches/GhostCounter';

const SubSectorCard = ({ sb }) => {
  return (
    <div>
      <div
        key={sb._id}
        className='box-border flex items-center justify-center w-full h-full border-b hover:bg-gray-200'
      >
        <div className='w-2/3 p-2 '>
          <p className=' text-lg mb-1 text-black '>{sb.nombre}</p>
          <p className=' text-xs mb-1 text-gray-700 '>
            {`Número de vías: ${sb.nVias}`}
          </p>
        </div>
        <div className='flex-none w-1/3 h-full'>
          <GhostCounter subsector={sb._id} />
        </div>
      </div>
    </div>
  );
};

export default SubSectorCard;
