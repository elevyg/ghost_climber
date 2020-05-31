import React from './node_modules/react';

const BorderBtn = ({ titulo, funcion }) => {
  return (
    <div>
      <button
        className={`bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1`}
        type='button'
        style={{ transition: 'all .15s ease' }}
        onClick={() => funcion(false)}
      >
        {titulo}
      </button>
    </div>
  );
};

export default BorderBtn;
