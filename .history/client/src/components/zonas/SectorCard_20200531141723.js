import React from 'react';
import GhostCounter from './GhostCounter';

const SectorCard = ({ sector }) => {
  const { nombre, subsectores } = sector;

  return (
    <div className='rounded overflow-hidden shadow-lg m-3'>
      <div className=''>
        <div className='px-3 font-bold text-2xl  bg-gray-300 '>{nombre}</div>
        {subsectores &&
          subsectores.map((sb) => (
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
          ))}
      </div>
    </div>
  );
};

export default SectorCard;
