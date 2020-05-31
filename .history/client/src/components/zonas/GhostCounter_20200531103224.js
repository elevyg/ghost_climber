import React from 'react';

const GhostCounter = () => {
  return (
    <div id='wrapper' className='wrapper relative top-0 left-0 z-1 w-10 h-6'>
      <button className='inline-block flex justify-center'>
        <h5>1</h5>
        <i className='fas z-10 fa-ghost text-gray-500 ml-1'></i>
      </button>
    </div>
  );
};

//

export default GhostCounter;
