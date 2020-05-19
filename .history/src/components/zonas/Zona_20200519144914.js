import React from 'react';
import SectorCard from './SectorCard';

const Zona = ({ zona }) => {
  const { comuna, region, sector } = zona;
  return (
    <div className=' grid-col-1 w.auto border-2 rounded border-gray-400 wrap'>
      <div className='p-3 m-3 '>
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
