import React from 'react';

const Form = () => {
  return (
    <div className='container flex flex-col bg-gray-500 rounded  shadow-md  m-3 w-1/3 p-3'>
      <h1 className='text-2xl strong text-white border-b mb-3'>
        Creo que ire a ...{' '}
      </h1>
      <form>
        <label
          className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
          for='grid-state'
        >
          Sector
        </label>

        <select
          className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
          id='grid-state'
        >
          <option value='Chilcas'>Las Chilcas</option>
          <option value='Manyos'> Los Manyos</option>
          <option value='Palestras'>Las Palestras</option>
          <option value='Chacabuco'>Chacabuco</option>
        </select>
      </form>
    </div>
  );
};

export default Form;
