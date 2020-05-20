import React from 'react';
import SectorCard from './SectorCard';

const Zona = ({ zona }) => {
  const { comuna, region, sector } = zona;
  return (
    <div className='w-screen  inline-block border-2 rounded border-gray-400 wrap m-3'>
      <div className='p-3 m-2 '>
        <h1 className=' text-4xl '>{comuna}</h1>
        <h3 className='text-lg self-end m-3'>{region}</h3>
      </div>
      <div className='flex '>
        {sector &&
          sector.map((sector) => (
            <div className='flex-1 flex-wrap '>
              <SectorCard key={sector.id} sector={sector} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Zona;
