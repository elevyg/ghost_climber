import React from 'react';
import GhostCounter from '../batches/GhostCounter';

const SubSectorCard = ({ sb }) => {
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
          <GhostCounter sb={sb} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(SubSectorCard);
