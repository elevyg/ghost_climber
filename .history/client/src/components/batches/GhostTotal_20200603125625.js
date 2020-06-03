import React from 'react';

const GhostTotal = ({ contador, loading }) => {
  console.log(loading);
  return (
    <div id='' className=' flex items-center justify-center px-3'>
      <div
        className={` inline-block flex justify-center items-center rounded w-12 px-3 focus:outline-none ' 
       ${
         contador === 0 || loading
           ? 'bg-blue-200 text-gray-500'
           : 'bg-blue-500 text-white'
       }
         `}
      >
        <h5 className=''>{loading ? 0 : contador}</h5>
        <i className='fas fa-ghost ml-1'></i>
      </div>
    </div>
  );
};

export default GhostTotal;
