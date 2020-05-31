import React, { useState } from 'react';

const GhostCounter = () => {
  const [counter, setCounter] = useState(0);

  // add 1 to the couter
  const countOne = () => {
    if (counter <= 2) {
      let count = counter + 1;
      setCounter(count);
    }
  };

  const resetCount = () => setCounter(0);

  return (
    <div id='' className='relative flex pr-3 items-center justify-center'>
      <button
        className={
          ' absolute inset-x-0  inline-block flex justify-center items-center rounded  px-3 ' +
          (counter === 0
            ? 'bg-blue-200 ' + 'text-gray-500'
            : 'bg-blue-500 ' + 'text-white')
        }
        onClick={countOne}
      >
        <h5 className=''>{counter}</h5>
        <i className='fas fa-ghost ml-1'></i>
      </button>
      {counter > 0 ? (
        <div className=' absolute flex justify-center'>
          <button
            className=' w-2/3 inset-y-0  inline-block flex justify-center items-center text-sm  text-gray-500'
            onClick={resetCount}
          >
            <i className='fas fa-undo w-1/3'></i>
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

//

export default GhostCounter;
