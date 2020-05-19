import React from 'react';
import SectorCard from './SectorCard';

const Zona = () => {
  return (
    <div className='container flex flex-wrap border-b-2 border-gray-400'>
      <div className='p-3 m-3'>
        <h1 className='text-4xl'>Llayllay</h1>
        <h3>Valparaiso</h3>
        <SectorCard />
      </div>
    </div>
  );
};

export default Zona;
