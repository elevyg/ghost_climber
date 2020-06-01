import React from 'react';
import loading from './loading.gif';
const GhostLoading = () => {
  return (
    <div className='flex justify-center'>
      <img
        src={loading}
        alt='Loading...'
        style={{ width: '500px', margin: 'auto', display: 'block' }}
      />
    </div>
  );
};

export default GhostLoading;
