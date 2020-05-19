import React from 'react';

const SectorCard = ({ sector }) => {
  const { nombre, subsector } = sector;

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <div className=''>
        <div className='px-3 font-bold text-2xl mb-2 bg-gray-300'>
          Las Chilcas
        </div>
        {subsector &&
          subsector.map((sb) => (
            <div className='flex items-center justify-left w-full border-b'>
              <a href='#!' class='block group hover:bg-blue p-4 '>
                <p class=' text-lg mb-1 text-black group-hover:text-white'>
                  {sb.nombre}
                </p>
                <p class=' text-sm mb-1 text-gray-700 group-hover:text-white'>
                  {`Número de vías: ${sb.n_vias}`}
                </p>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SectorCard;
