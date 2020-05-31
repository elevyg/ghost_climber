import React from 'react';
import loading from './loading.gif';
const GhostLoading = () => {
  return (
    <div>
      <img
        src={loading}
        alt='Loading...'
        style={{ width: 'auto', margin: 'auto', display: 'block' }}
      />
    </div>
  );
};

export default GhostLoading;
