import React from 'react';
import SectorCard from './SectorCard';

const Zona = ({ zona }) => {
  const { comuna, region, sector } = zona;
  return (
    <div className='w-auto  inline-block border-2 rounded border-gray-400 wrap m-3'>
      <div className='p-1 mx-1'>
        <h1 className=' text-2xl '>{comuna}</h1>
        <h3 className='text-lg self-end mb-1'>{region}</h3>
      </div>
      <div className='flex '>
        {sector &&
          sector.map((sector) => (
            <div className='flex-wrap ' key={sector.id}>
              <SectorCard key={'s_' + sector.id} sector={sector} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Zona;
