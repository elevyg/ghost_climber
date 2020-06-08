import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';

const Landing = () => {
  return (
    <Fragment>
      <Navbar isDateBox={false} />
      <div className='flex w-full h-full'></div>;
    </Fragment>
  );
};

export default Landing;
