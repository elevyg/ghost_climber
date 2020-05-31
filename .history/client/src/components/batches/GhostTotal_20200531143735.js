import React, { useState } from 'react';

const GhostTotal = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div id='' className=' relative flex items-center justify-center px-3'>
      <div
        className={
          ' absolute inset-x-0  inline-block flex justify-center items-center rounded  p-3 ' +
          (counter === 0
            ? 'bg-blue-200 ' + 'text-gray-500' + 'opacity-50'
            : 'bg-blue-500 ' + 'text-white')
        }
      >
        <h5 className=''>{counter}</h5>
        <i className='fas fa-ghost ml-1'></i>
      </div>
    </div>
  );
};

//

export default GhostTotal;
