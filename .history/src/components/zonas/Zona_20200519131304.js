import React from 'react';
import SectorCard from './SectorCard';

const Zona = () => {
  return (
    <div className='container grid grid-cols-1 flex flex-wrap border-b-2 border-gray-400'>
      <div className='flex p-3 m-3'>
        <h1 className='flex-initial text-4xl '>Llayllay</h1>
        <h3 className=' flex-initial text-lg self-end '>Valparaiso</h3>
      </div>
      <div className='flex-row'>
        <SectorCard />
      </div>
    </div>
  );
};

export default Zona;
