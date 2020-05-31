import React from 'react';

const BorderBtn = () => {
  return (
    <div>
      <button
        className='bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
        type='button'
        style={{ transition: 'all .15s ease' }}
        onClick={() => setShowModal(false)}
      >
        Save Changes
      </button>
    </div>
  );
};

export default BorderBtn;
