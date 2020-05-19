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
        {}
      </div>
    </div>
  );
};

export default SectorCard;
