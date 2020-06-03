import React from 'react';
import GhostCounter from './GhostCounter';

const SectorCard = ({ sector }) => {
  const { nombre, subsector } = sector;

  return (
    <div className='w-10000 rounded overflow-hidden shadow-lg m-3'>
      <div className=''>
        <div className='px-3 font-bold text-2xl  bg-blue-300 '>{nombre}</div>
        {subsector &&
          subsector.map((sb) => (
            <div className='box-border flex items-center justify-center w-full h-full border-b hover:bg-gray-200'>
              <div className='w-2/3 p-2 '>
                <p className=' text-lg mb-1 text-black '>{sb.nombre}</p>
                <p className=' text-xs mb-1 text-gray-700 '>
                  {`Número de vías: ${sb.n_vias}`}
                </p>
              </div>
              <div className='flex-none w-1/3 h-full'>
                <GhostCounter key={sb.id} subsector={sb.nombre} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SectorCard;