import React, { useState } from 'react';

const GhostCounter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div id='' className=''>
      <button className='inline-block flex justify-center items-center rounded bg-blue-200 px-3 '>
        <h5 className='text-gray-500'>1</h5>
        <i className='fas fa-ghost text-gray-500 ml-1'></i>
      </button>
    </div>
  );
};

//

export default GhostCounter;
