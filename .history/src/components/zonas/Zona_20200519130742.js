import React from 'react';
import SectorCard from './SectorCard';

const Zona = () => {
  return (
    <div className='container flex flex-wrap border-b-2 border-gray-400'>
      <div className='flex p-3 m-3'>
        <h1 className='text-4xl flex-1'>Llayllay</h1>
        <h3 className='text-4xl flex-2'>Valparaiso</h3>
      </div>
      <SectorCard />
    </div>
  );
};

export default Zona;
