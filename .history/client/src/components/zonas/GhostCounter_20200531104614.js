import React, { useState } from 'react';

const GhostCounter = () => {
  const [counter, setCounter] = useState(0);

  // add 1 to the couter
  const countOne = () => {
    let count = counter + 1;
    setCounter(count);
  };

  return (
    <div id='' className=''>
      <button
        className='inline-block flex justify-center items-center rounded bg-blue-200 px-3 active:bg-blue-700 active:border-transparent'
        onClick={countOne}
      >
        <h5 className='text-gray-500'>{counter}</h5>
        <i className='fas fa-ghost text-gray-500 ml-1'></i>
      </button>
    </div>
  );
};

//

export default GhostCounter;
