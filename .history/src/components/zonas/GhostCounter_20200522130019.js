import React from 'react';

const GhostCounter = () => {
  return (
    <div className=' box-border flex items-stretch justify-end items-baseline content-center pr-3 w-1/3'>
      <div className='relative bg-blue-100 border-b rounded p-1 m-1 object-contain'>
        <input
          type='checkbox'
          className=' absolute top-0 left-0 z-2 cursor-pointer w-full h-full  '
        />
        {Math.round(Math.random() * 12)}
        <i className='fas fa-ghost text-gray-500 ml-1'></i>
      </div>
    </div>
  );
};

export default GhostCounter;
