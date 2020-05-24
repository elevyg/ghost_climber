import React, { useState } from 'react';

const Form = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    const plusOne = count + 1;
    setCount(plusOne);
  };
  const decrement = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      const minusOne = count - 1;
      setCount(minusOne);
    }
  };

  return (
    <div className='flex flex-col bg-gray-500 rounded shadow-md m-3 p-3 w-100 h-auto '>
      <h1 className='text-2xl strong text-white border-b mb-3'>
        Creo que ire a ...{' '}
      </h1>
      <form>
        <label
          className='block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2'
          htmlFor='grid-state'
        >
          Sector
        </label>
        <select className='form-select block w-full my-1' id='grid-state'>
          <option value='Chilcas'>Las Chilcas</option>
          <option value='Manyos'> Los Manyos</option>
          <option value='Palestras'>Las Palestras</option>
          <option value='Chacabuco'>Chacabuco</option>
        </select>
        <label
          className='block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2'
          htmlFor='grid-state'
        >
          Sub Sector
        </label>
        <select className='form-select block w-full my-1 ' id='grid-state'>
          <option value='Chilcas'>Desplome</option>
          <option value='Manyos'> Los Manyos</option>
          <option value='Palestras'>Las Palestras</option>
          <option value='Chacabuco'>Chacabuco</option>
        </select>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'></div>
        <label
          className='block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2 mt-3'
          htmlFor='grid-state'
        >
          Número de escaladores
        </label>

        <div className='flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1'>
          <button
            type='button'
            onClick={decrement}
            className=' bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none'
          >
            <span className='m-auto text-2xl font-thin'>−</span>
          </button>
          <input
            type='number'
            className=' appearance-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none'
            name='custom-input-number'
            value={count}
          ></input>
          <button
            type='button'
            onClick={increment}
            className='bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer'
          >
            <span className='m-auto text-2xl font-thin'>+</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
