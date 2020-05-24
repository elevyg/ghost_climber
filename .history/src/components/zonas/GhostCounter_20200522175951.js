import React from 'react';

const GhostCounter = () => {
  return (
    <div id='wrarper' className='relative top-0 left-0 z-1'>
      <input
        type='checkbox'
        id='ghostToggler'
        className='absolute top-0 left-0 z-10 w-7 h-6 cursor-pointer'
      />
      <div id='ghostBtn' className='absolute top-0 left-0 z-1  w-6 h-6 '>
        <div className='flex w-full h-full justify-center items-center text-gray-500 bg-blue-100 rounded px-4 z-1'>
          <h5>1</h5>
          <i className='fas z-10 fa-ghost text-gray-500 ml-1'></i>
        </div>
      </div>
    </div>
  );
};

export default GhostCounter;
