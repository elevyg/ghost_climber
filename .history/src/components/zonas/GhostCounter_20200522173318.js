import React from 'react';

const GhostCounter = () => {
  return (
    <div id='wrarper' className='fixed top-0 left-0 z-1'>
      <input
        type='checkbox'
        id='ghostToggler'
        className='absolute top-0 left-0 z-2 w-5 h-5 '
      />
      <div id='ghostBtn' className='absolute top-0 left-0'>
        <div>
          <i className='fas z-10 fa-ghost text-gray-500 ml-1'></i>
        </div>
      </div>
    </div>
  );
};

export default GhostCounter;
