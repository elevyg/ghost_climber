import React from 'react';
import SectorCard from './SectorCard';

const Zona = () => {
  return (
    <div className='container grid grid-cols-1 flex flex-wrap border-b-2 border-gray-400'>
      <div className='flex p-3 m-3'>
        <h1 className='text-4xl flex-1'>Llayllay</h1>
        <h3 className='text-lg flex-2'>Valparaiso</h3>
      </div>
      <div className='flex-row'>
        <SectorCard />
      </div>
    </div>
  );
};

export default Zona;
