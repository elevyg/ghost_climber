import React from 'react';
import DateBox from '../layout/DateBox';

const Dev = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='mt-20'>
        <DateBox />
        <div className='w-32 h-screen'></div>
      </div>
    </div>
  );
};

export default Dev;
