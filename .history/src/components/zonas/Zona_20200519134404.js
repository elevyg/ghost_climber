import React from 'react';
import SectorCard from './SectorCard';

const Zona = ({ zona }) => {
  const { comuna, region, sector } = zona;
  return (
    <div className='container grid-col-1 border-2 rounded border-gray-400 px-auto mb-3'>
      <div className='inline-block p-3 m-3 '>
        <h1 className=' text-4xl '>{comuna}</h1>
        <h3 className='text-lg self-end m-3'>{region}</h3>
      </div>
      <div className='flex '>
        {sector &&
          sector.map((sector) => (
            <div className='flex-1 flex-wrap '>
              <SectorCard sector={sector} key={sector.id} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Zona;
