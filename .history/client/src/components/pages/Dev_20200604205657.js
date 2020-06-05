import React from 'react';
import DateBox from '../layout/DateBox';

const Dev = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <button>
        <i class='fas fa-chevron-left'></i>
      </button>
      <div className='mt-20'>
        <DateBox />
        <div className='w-32 h-screen'></div>
      </div>
      <button>
        <i class='fas fa-chevron-right'></i>
      </button>
    </div>
  );
};

export default Dev;
