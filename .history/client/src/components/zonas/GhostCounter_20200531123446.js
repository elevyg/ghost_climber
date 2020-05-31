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

  return (
    <div id='' className=''>
      <button
        className={
          'inline-block flex justify-center items-center rounded  px-3 ' +
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
        <button
          className={
            'inline-block flex justify-center items-center rounded  px-3 '
          }
        >
          <i class='fas fa-undo'></i>
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

//

export default GhostCounter;
