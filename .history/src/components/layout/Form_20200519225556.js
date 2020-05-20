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
        <div class="inline-block relative w-64"></div>
        <select
          class='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
          id='grid-state'
        >
          <option value='Chilcas'>Las Chilcas</option>
          <option value='Manyos'> Los Manyos</option>
          <option value='Palestras'>Las Palestras</option>
          <option value='Chacabuco'>Chacabuco</option>
        </select>
        <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
          <svg
            class='fill-current h-4 w-4'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
          </div>.
        </div>
        <label
          className='block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2 mt-3'
          for='grid-state'
        >
          Número de escaladores
        </label>
      </form>
    </div>
  );
};

export default Form;
