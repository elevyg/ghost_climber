import React from 'react';

const SectorCard = ({ sector }) => {
  const { nombre, subsector } = sector;

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg m-3'>
      <div className=''>
        <div className='px-3 font-bold text-2xl mb-2 bg-gray-300'>{nombre}</div>
        {subsector &&
          subsector.map((sb) => (
            <div className='flex items-center justify-left w-full border-b'>
              <div className='block .w-{3/4} group hover:bg-blue p-4 '>
                <p className=' text-lg mb-1 text-black group-hover:text-white'>
                  {sb.nombre}
                </p>
                <p className=' text-sm mb-1 text-gray-700 group-hover:text-white'>
                  {`Número de vías: ${sb.n_vias}`}
                </p>
              </div>
              <div className='.w-{1/4}'></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SectorCard;
