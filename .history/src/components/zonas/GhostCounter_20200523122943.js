import React from 'react';

const GhostCounter = () => {
  return (
    <div id='wrapper' className='wrapper relative top-0 left-0 z-1 w-10 h-6'>
      <input
        type='checkbox'
        id='ghostToggler'
        className='ghostToggler absolute top-0 left-0 z-10 w-full h-full cursor-pointer opacity-0'
      />
      <div id='ghostBtn' className='absolute top-0 left-0 z-2  w-full h-full  '>
        <div className='flex w-full h-full justify-center items-center text-gray-500 bg-blue-100 rounded px-4 z-1'>
          <h5>1</h5>
          <i className='fas z-2 fa-ghost text-gray-500 ml-1'></i>
        </div>
      </div>
      <div
        id='ghostBtn2'
        className='absolute top-0 left-0 z-1  w-full h-full  '
      >
        <div className='flex w-full h-full justify-center items-center text-gray-500 bg-blue-700 rounded px-4 z-1'>
          <h5>1</h5>
          <i className='fas z-1 fa-ghost text-gray-500 ml-1'></i>
        </div>
      </div>
    </div>
  );
};

export default GhostCounter;
