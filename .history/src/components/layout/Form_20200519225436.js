import React from 'react';

const Form = () => {
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
        <select
          class='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
          id='grid-state'
        >
          <option value='Chilcas'>Las Chilcas</option>
          <option value='Manyos'> Los Manyos</option>
          <option value='Palestras'>Las Palestras</option>
          <option value='Chacabuco'>Chacabuco</option>
        </select>
        <label
          className='block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2'
          for='grid-state'
        >
          Cantidad de escaladores
        </label>
      </form>
    </div>
  );
};

export default Form;
