import React from 'react';
import SectorCard from './SectorCard';

const Zona = ({ zona }) => {
  const { comuna, region, sector } = zona;
  return (
    <div className='container grid grid-cols-1 flex flex-wrap border-b-2 border-gray-400 pb-10 px-10'>
      <div className='flex p-3 m-3 '>
        <h1 className='flex-initial text-4xl '>{comuna}</h1>
        <h3 className=' flex-initial text-lg self-end m-3'>{region}</h3>
      </div>
      <div className='flex-row'>
        <SectorCard />
      </div>
    </div>
  );
};

export default Zona;
