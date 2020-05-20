import React, { useState } from 'react';

const Form = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount({ count: count + 1 });
  };
  const decrement = () => {
    setCount({ count: count - 1 });
  };

  return (
    <div className='container flex flex-col bg-gray-500 rounded  shadow-md  m-3 w-1/3 p-3'>
      <h1 className='text-2xl strong text-white border-b mb-3'>
        Creo que ire a ...{' '}
      </h1>
      <form>
        <label
          className='block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2'
          for='grid-state'
        >
          Sector
        </label>
        <select class='form-select block w-full mt-1' id='grid-state'>
          <option value='Chilcas'>Las Chilcas</option>
          <option value='Manyos'> Los Manyos</option>
          <option value='Palestras'>Las Palestras</option>
          <option value='Chacabuco'>Chacabuco</option>
        </select>
        <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'></div>
        <label
          className='block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2 mt-3'
          for='grid-state'
        >
          Número de escaladores
        </label>

        <div class='flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1'>
          <button
            onClick={decrement}
            className=' bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none'
          >
            <span class='m-auto text-2xl font-thin'>−</span>
          </button>
          <input
            type='number'
            className=' appearance-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none'
            name='custom-input-number'
            value='0'
          ></input>
          <button
            onClick={increment}
            className='bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer'
          >
            <span class='m-auto text-2xl font-thin'>+</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
