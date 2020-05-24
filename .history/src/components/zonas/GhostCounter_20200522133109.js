import React from 'react';

const GhostCounter = () => {
  return (
    <div className=' box-border flex items-stretch justify-end items-baseline content-center pr-3 w-1/3'>
      <div className=' relative flex  justify-center items-center'>
        <input
          type='checkbox'
          id='ghostBtn'
          className=' absolute top-0 left-0 z-10 cursor-pointer w-full h-full opacity-100  '
        />
        <div
          id='ghostBtnBg'
          className=' w-full h-full absolute top-0 left-0 z-0 bg-blue-100 border-b rounded p-1 m-1 object-contain hover:bg-blue-200 checked:bg-blue-700'
        >
          {Math.round(Math.random() * 12)}
        </div>
        <i className='fas z-10 fa-ghost text-gray-500 ml-1'></i>
      </div>
    </div>
  );
};

export default GhostCounter;
