import React from 'react';

const SectorCard = () => {
  const subsector = [
    { nombre: 'Desplome', n_vias: 7 },
    { nombre: 'Cubo', n_vias: 13 },
  ];

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <div className='px-6 py4'>
        <div className='font-bold text-2xl mb-2 border-b border-b-1'>
          Las Chilcas
        </div>
        {subsector &&
          subsector.map((sb) => (
            <div className='flex items-center justify-left w-full'>
              <a href='#!' class='block group hover:bg-blue p-4 border-b'>
                <p class=' text-lg mb-1 text-black group-hover:text-white'>
                  {sb.nombre}
                </p>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SectorCard;
