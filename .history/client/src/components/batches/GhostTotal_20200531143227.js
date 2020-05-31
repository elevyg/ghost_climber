import React, { useState } from 'react';

const GhostTotal = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div id='' className='relative flex pr-3 items-center justify-center'>
      <div
        className={
          ' absolute inset-x-0  inline-block flex justify-center items-center rounded  px-3 ' +
          (counter === 0
            ? 'bg-blue-200 ' + 'text-gray-500' + 'opacity-50'
            : 'bg-blue-500 ' + 'text-white')
        }
        onClick={countOne}
      >
        <h5 className=''>{counter}</h5>
        <i className='fas fa-ghost ml-1'></i>
      </div>

      <div
        className='absolute inset-y-0.right-1 inline-block flex justify-center items-center text-sm ml-2 text-gray-500'
        onClick={resetCount}
      >
        <i className='fas fa-undo'></i>
      </div>
    </div>
  );
};

//

export default GhostTotal;
