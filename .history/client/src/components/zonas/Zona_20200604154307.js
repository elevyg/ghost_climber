import React from 'react';
import SectorCard from './SectorCard';

const Zona = ({ zona }) => {
  const { comuna, sector } = zona;
  return (
    <div className='box-border bg-gray-300 opacity-50 rounded  m-3 w-full md:w-auto h-auto'>
      <div className='p-1 mx-1'>
        <h1 className='text-2xl'>{comuna}</h1>
        <h3 className='text-lg self-end mb-1'>{sector && sector[0].region}</h3>
      </div>
      <div className='flex flex-col w-auto'>
        {sector &&
          sector.map((sector) => (
            <SectorCard key={sector.id} sector={sector} />
          ))}
      </div>
    </div>
  );
};

export default Zona;
